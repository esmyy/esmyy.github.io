# 常用插件

|     需求      |                                  配置说明                                  |
| :-----------: | :------------------------------------------------------------------------: |
|   基础配置    |                    entry,output,hmr,module.rules 等设置                    |
|   HTML 压缩   |                  html-webpack-plugin 设置 options.minify                   |
|   CSS 压缩    | optimize-css-assets-webpack-plugin V4 <br/>css-minimizer-webpack-plugin V5 |
|   CSS 兼容    |                                autoprefixer                                |
|   CSS 适配    |                               px2rem-loader                                |
|   资源内联    |                          raw-loader，style-loader                          |
|    JS 压缩    |                    UglifyJsPlugin V3， 内置默认压缩 V4                     |
|  多页面打包   |                        html-webpack-plugin 统一处理                        |
|   构建清理    |                   CleanWebpackPlugin V4，output.clean V5                   |
|   代码分割    |          SplitChunksPlugin，MiniCssExtractPlugin 也算一种代码分割          |
|    eslint     |          基于 eslint:recommend，pre-commit，eslint-loader(老项目)          |
| Prerender/SSR |              Nuxt 等完善的方案，或者对应 vue-server-render 等              |
|   过程分析    |                        seed-measure-webpack-plugin                         |
|   体积分析    |                          webpack-bundle-analyzer                           |
