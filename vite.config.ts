import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import commonjs from "@rollup/plugin-commonjs";
const isH5 = process.env.UNI_PLATFORM === "h5";
import vwt from 'weapp-tailwindcss-webpack-plugin/vite';
import postcssWeappTailwindcssRename from 'weapp-tailwindcss-webpack-plugin/postcss';

const postcssPlugins = [require("autoprefixer")(), require("tailwindcss")()];
if (!isH5) {
  postcssPlugins.push(
    require("postcss-rem-to-responsive-pixel")({
      rootValue: 32,
      propList: ["*"],
      transformUnit: "rpx",
    })
  );
  postcssPlugins.push(postcssWeappTailwindcssRename());
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [commonjs(), uni(), isH5 ? undefined : vwt()],
  // 假如 postcss.config.js 不起作用，请使用内联 postcss
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
});
