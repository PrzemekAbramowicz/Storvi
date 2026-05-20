/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["cn", "cva"],
};

export default config;
