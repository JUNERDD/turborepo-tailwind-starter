# Turborepo Tailwind CSS 启动器

这是继承自[官方的 Turborepo 启动器](https://github.com/vercel/turbo/tree/main/examples/with-tailwind)。

## 使用此示例

运行以下命令：

```sh
git clone https://github.com/JUNERUSE/turborepo-tailwind-starter.git
```

## 包含内容

这个 Turborepo 包含以下包/应用：

### 应用和包

- `docs`：一个使用 [Next.js](https://nextjs.org/) 和 [Tailwind CSS](https://tailwindcss.com/) 的应用
- `web`：另一个使用 [Next.js](https://nextjs.org/) 和 [Tailwind CSS](https://tailwindcss.com/) 的应用
- `@repo/ui`：一个简单的 React 组件库，使用 [Tailwind CSS](https://tailwindcss.com/)，被 `web` 和 `docs` 应用共享
- `@config/eslint-config`：`eslint` 配置（包括 `eslint-config-next` 、 `eslint-config-prettier` 和 `eslint-plugin-prettier`）
- `@config/prettier-config`：`prettier` 配置（包括 `prettier-plugin-packagejson` 和 `prettier-plugin-tailwindcss`）
- `@config/typescript-config`：整个 monorepo 中使用的 `tsconfig.json`

每个包/应用均 100% 使用 [TypeScript](https://www.typescriptlang.org/)。

### 构建 packages/ui

这个示例设置为将 `ui` 组件的编译样式输出到 `dist` 目录。组件的 `.tsx` 文件通过 `next.config.js` 中的 `transpilePackages` 直接被 Next.js 应用使用。这么做有几个原因：

- 使得在应用和包之间共享一个 `tailwind.config.js` 尽可能容易。
- 仅依赖 Next.js 编译器和 `tailwindcss` 简化包的编译。
- 确保 Tailwind 类不会相互覆盖。`ui` 包为其类使用 `ui-` 前缀。
- 维护明确的包导出边界。

另一种选择是直接从源代码使用 `packages/ui`，而不进行构建。如果使用此选项，您需要在应用中的 `tailwind.config.js` 中更新您的包位置，以便它可以找到所有 `tailwindcss` 类名的使用，以进行 CSS 编译。

例如，在 [tailwind.config.js](packages/tailwind-config/tailwind.config.js) 中：

```js
  content: [
    // 应用内容
    `src/**/*.{js,ts,jsx,tsx}`,
    // 如果不进行编译，包含包
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

如果选择此策略，您可以从 `ui` 包中移除 `tailwindcss` 和 `autoprefixer` 依赖项。

### 工具

这个 Turborepo 已为您设置了一些额外的工具：

- [Tailwind CSS](https://tailwindcss.com/) 用于样式
- [TypeScript](https://www.typescriptlang.org/) 用于静态类型检查
- [ESLint](https://eslint.org/) 用于代码检查
- [Prettier](https://prettier.io) 用于代码格式化
