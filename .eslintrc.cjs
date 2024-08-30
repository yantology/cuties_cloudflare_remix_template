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
    "plugin:tailwindcss/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
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
        '@typescript-eslint/naming-convention': [
      'error',
      // Variabel umum (camelCase)
      {
        selector: 'variable',
        format: ['camelCase'],
        leadingUnderscore: 'allow', // Izinkan awalan underscore (misal: _privateVar)
      },
      // Konstanta (UPPER_CASE)
      {
        selector: 'variable',
        types: ['boolean', 'string', 'number'],
        format: ['UPPER_CASE'],
      },
      // Parameter Fungsi (camelCase)
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },

      // Penamaan Class (PascalCase)
      {
        selector: 'class',
        format: ['PascalCase'],
      },

      // Penamaan Fungsi (camelCase atau PascalCase untuk constructor)
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // Method (camelCase atau PascalCase jika static)
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
      },
      // Property (camelCase atau PascalCase jika static)
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
      },
      // Type Alias (PascalCase)
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      // Interface (PascalCase)
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
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
