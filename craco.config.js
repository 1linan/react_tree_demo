const CracoLessPlugin = require("craco-less");
const { loaderByName } = require("@craco/craco");
const path = require('path');


module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      // 约定：使用 @scss 表示全局 SASS 样式所在路径
      // 在 SASS 中使用
      '@scss': path.resolve(__dirname, 'src/assets/styles')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessModuleRule(lessModuleRule, context) {
          // Configure the file suffix
          lessModuleRule.test = /.module.less$/;

          // Configure the generated local ident name.
          console.log(lessModuleRule)
          const cssLoader = lessModuleRule.use.find(loaderByName("css-loader"));
          cssLoader.options.modules = {
            localIdentName: "[local]_[hash:base64:5]",
          };

          return lessModuleRule;
        },
      },
    },
  ],
};