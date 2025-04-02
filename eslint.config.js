import { recommended } from "./src/index.js";

export default [
  {
    ignores: [
      "test/_fixtures",
      "test/fixtures/input"
    ],
  },
  ...recommended
];
