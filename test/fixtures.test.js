import { join, resolve } from "node:path";

import { execa } from "execa";
import fg from "fast-glob";
import fs from "fs-extra";
import { afterAll, beforeAll, it } from "vitest";

// Antes de ejecutar las pruebas, elimina el directorio temporal `_fixtures` si existe
beforeAll(async () => {
  await fs.rm("test/_fixtures", { recursive: true, force: true });
});

// Después de ejecutar las pruebas, elimina nuevamente el directorio temporal `_fixtures`
afterAll(async () => {
  await fs.rm("test/_fixtures", { recursive: true, force: true });
});

// Lista de configuraciones ESLint que se probarán
const configs = [
  { name: "basic", configPath: "src/flat/basic.js" },
  { name: "recommended", configPath: "src/flat/recommended.js" },
];

configs.forEach(({ name, configPath }) => {
  runWithConfig(name, configPath);
});

// Función que define una prueba concurrente para una configuración específica
function runWithConfig(name, configPath) {
  it.concurrent(name, async ({ expect }) => {
    // Define las rutas necesarias para la prueba
    const from = resolve("test/fixtures/input");
    const output = resolve("test/fixtures/output", name);
    const temp = resolve("test/_fixtures", name);

    // Copia los archivos de entrada a la carpeta temporal, excluyendo `node_modules`
    await fs.copy(from, temp, {
      filter: (src) => !src.includes("node_modules"),
    });

    // Crea un archivo de configuración ESLint dinámico en la carpeta temporal
    await fs.writeFile(join(temp, "eslint.config.js"), `
      import config from '${resolve(configPath)}';
      export default config;
    `);

    // Verifica que el archivo de configuración se ha creado correctamente
    const eslintConfigPath = join(temp, "eslint.config.js");
    if (!await fs.pathExists(eslintConfigPath)) {
      throw new Error(`No se pudo crear el archivo de configuración ESLint en ${eslintConfigPath}`);
    }

    // Ejecuta ESLint con la configuración generada y aplica correcciones automáticas
    await execa("npx", ["eslint", "--fix", "."], {
      cwd: temp,
      stdio: "pipe",
    });

    // Busca todos los archivos en la carpeta temporal, excluyendo ciertos patrones
    const files = await fg("**/*", {
      ignore: ["node_modules", "eslint.config.js", "test/_fixtures", "test/fixtures/input"],
      cwd: temp,
    });

    // Compara el contenido de los archivos procesados con los archivos de entrada
    await Promise.all(files.map(async (file) => {
      const content = await fs.readFile(join(temp, file), "utf-8");
      const source = await fs.readFile(join(from, file), "utf-8");
      const outputPath = join(output, file);

      // Si el contenido no cambió, elimina el archivo de salida si existe
      if (content === source) {
        if (fs.existsSync(outputPath)) await fs.remove(outputPath);
        return;
      }

      // Si el contenido cambió, verifica que coincida con el archivo de snapshot esperado
      await expect.soft(content).toMatchFileSnapshot(join(output, file));
    }));
  }, 30000);
}
