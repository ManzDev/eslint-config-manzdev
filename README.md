# eslint-config-manzdev

Paquete de reglas preconfiguradas para `eslint` (linter de Javascript).

Este paquete se utiliza internamente en `mkweb`, pero se ha separado por si alguien quiere utilizarlo de forma sencilla:
https://manz.dev/software/mkweb

## Características destacables

- ✨ Comillas dobles sobre comillas simples
- ✨ Punto y coma siempre
- ✨ Espacio antes de paréntesis de funciones (en arrow functions y anónimas)
- ✨ No permitas `await` en bucles
- ✨ No permitas `${var}` en comillas dobles. Convierte a backticks.
- ✨ Añade las llaves a arrow functions cuando sea necesario
- ✨ No permitas decimales sin el número `.5` en lugar de `0.5`
- ✨ Máximo `500` lineas por fichero `.js`: Obliga a separar en módulos
- ✨ Máximo `250` lineas por función: Obliga a modularizar funciones
- ✨ No permitas ternarios innecesarios que pueden reescribirse de forma más simple
- ✨ No permitas enlaces `javascript:*` (programación peligrosa)
- ✨ No permitas secuencias de comandos separados por `,` (programación peligrosa)
- ✨ No permitas uso de `var`: prefiere `let` o `const`
- ✨ Convierte a `const` siempre que no reasignes la variable
- ✨ Prefiere `...args` sobre `arguments`
- ✨ Indentación: `2` espacios
- ✨ Obliga a escribir el `.js` en los `import` con rutas relativas

## Instalación

1. Instalar el linter y el paquete de configuración:

```bash
npm install -D eslint eslint-config-manzdev
```

2. Crear un fichero de configuración `.eslintrc.json` que lo utilice:

```js
{
  extends: "eslint-config-manzdev",
  rules: {
    /* ... */
  }
}
```

Si lo deseas, puedes modificar reglas a tu criterio en el apartado `rules`.

## Corrección automágica en VSCode

Si quieres que Visual Code sea capaz de corregir los errores automáticamente, necesitarás lo siguiente:

1. Instala la extensión oficial de [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Crea una carpeta `.vscode/` con un fichero `settings.json` en tu proyecto o pulsa <kbd>F1</kbd> / <kbd>Open User Settings (JSON)</kbd> e incluye la siguiente configuración recomendada:

```js
{
  /* Disable basic VSCode linters */
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  /* Activamos Stylelint */
  "eslint.enable": true,
  /* Corregir automágicamente */
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
   "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  /* ... */
}
```
