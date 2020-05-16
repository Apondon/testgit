module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
          .test(/\.pug$/)
          .use('pug-html-loader')
          .loader('pug-html-loader')
          .end()
    },
    devServer: {
      proxy:"http://localhost:3000"
    },
    productionSourceMap:false
}