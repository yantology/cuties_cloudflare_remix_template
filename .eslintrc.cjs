/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", 
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: true // Diperlukan oleh beberapa aturan TypeScript
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ["!**/.server", "!**/.client"], // Sesuaikan jika perlu

  // Mengambil konfigurasi dasar dari Remix
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier", 
    "plugin:tailwindcss/recommended" 
  ],
  plugins: [
    "react", 
    "jsx-a11y", 
    "@typescript-eslint", 
    "import", 
    "prettier" 
  ],
  settings: {
    react: {
      version: "detect", 
    },
    formComponents: ["Form"],
    linkComponents: [
      { name: "Link", linkAttribute: "to" },
      { name: "NavLink", linkAttribute: "to" },
    ],
    "import/resolver": {
      typescript: {},
      node: { // Tambahkan resolver Node.js
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // Aturan dari file ESLint 2
    "import/consistent-type-specifier-style": ["warn", "prefer-inline"],
    "import/no-duplicates": ["warn", { "prefer-inline": true }],
    "require-await": ["warn"],
    "no-empty-pattern": "off",
    "node/no-process-env": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": [2, { checksVoidReturn: { attributes: false } }],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    
    // Aturan tambahan (bisa dari file ESLint 1 atau kustom)
    "prettier/prettier": "error",  // Pastikan error Prettier ditampilkan
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }], 
    "react-hooks/exhaustive-deps": "warn" // Contoh aturan tambahan
  },
  overrides: [
    // Konfigurasi spesifik Node.js (dari file ESLint 1)
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true,
      },
    },
  ],
};