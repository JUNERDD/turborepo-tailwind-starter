const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/typescript',
      '@vercel/style-guide/eslint/react'
    ].map(require.resolve),
    'plugin:prettier/recommended'
  ],
  plugins: ['simple-import-sort'],
  parserOptions: {
    project
  },
  globals: {
    JSX: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  // add rules configurations here
  rules: {
    'import/no-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      files: ['*.config.js'],
      env: {
        node: true
      }
    }
  ]
}
