const nextStylePrettierConfig = require('@vercel/style-guide/prettier')

module.exports = {
  ...nextStylePrettierConfig,
  semi: false,
  printWidth: 120,
  trailingComma: 'none',
  plugins: [...nextStylePrettierConfig.plugins, 'prettier-plugin-tailwindcss']
}
