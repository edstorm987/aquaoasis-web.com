import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { globalIgnores } from "eslint/config";

const eslintConfig = [
  globalIgnores(["main-site/**"]),
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
