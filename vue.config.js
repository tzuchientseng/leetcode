// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   outputDir: 'dist',
//   publicPath: './',
// })

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production' ? '/leetcode/' : '/'
// })

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production' ? '/leetcode/' : '/',
//   devServer: {
//     host: '0.0.0.0', // 允許外部設備訪問
//     port: 8080, // 你可以更改成你想要的 port
//     allowedHosts: 'all', // 解決 Invalid Host header 問題
//   },
// })

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/leetcode/' : '/',
  devServer: {
    // 僅在開發環境中開放外部訪問
    host: process.env.NODE_ENV === 'development' ? '0.0.0.0' : 'localhost',
    port: 8080,
    allowedHosts: process.env.NODE_ENV === 'development' ? 'all' : [],
  },
})
