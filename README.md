# uni-app-vue3-for-amap-wx

For 

https://github.com/sonofmagic/uni-app-vite-vue3-tailwind-vscode-template/issues/2

注意点:

1. 由于 `amap-wx.130.js` 是 `commonjs` 模块，所以需要安装 `@rollup/plugin-commonjs` 来加载它，见 `vite.config.ts`
2. 高德的 key 我放入了 vite 环境变量中，使用时，在 `.env.sample` 里把高德的 `key` 放进去后，重命名为 `.env`即可生效， 文档见 https://vitejs.cn/guide/env-and-mode.html
3. 我准备了一个 setup，一个非 setup 版本，见 `pages/index/*` 下的2个文件