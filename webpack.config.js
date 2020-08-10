/*
 * @Author: Paul-Z-L
 * @Date: 2020-07-09 20:40:46
 * @LastEditors: Paul-Z-L
 * @LastEditTime: 2020-08-10 21:03:17
 */

// loader是源代码的处理器，plugin解决的是 loader处理不了的事情
// Webpack 的配置文件是遵循 Node.js 的 CommonJS 模块规范的 require()
 const path = require('path');

// Webpack 的配置是一个 Node.js 模块，所以并不只是 JSON 对象。
  module.exports = (env, argv) => {
   return {
      mode: env.production ? 'production' : 'development',
      devtool: env.produciotn ? 'source-maps' : 'cheap-module-eval-source-map',
      plugins: [
        new TerserPlugin({ // 去除 console.log();
            terserOptions: {
                compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
            }
        })
      ],
      entry: './src', // 可以有字符串 对象 数组
      output: {// 只有一个
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle_[hash:8].js',
      }
    }
  }
   

  // t_promotion_fillminuspresent_gift_wareKind