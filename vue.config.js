module.exports = {
  //单个代理

  devServer: {
    //http adress
    //改了配置文件一定要重启
    proxy: "http://192.168.0.100:3000",
    // proxy: "http://172.17.7.249:3000",
  },

  //多个代理
  //前端页面使用时 url: "/login/getuser",改为url: "/api/login/getuser",

  //   devServer: {
  //     proxy: {
  //       "/api": {
  //         target: "http://172.17.7.249:3000",
  //         ws: true,
  //         changeOrigin: true,
  //         //以'^/api'开头的地址都会被''空代替
  //         pathRewrite: {
  //           "^/api": "",
  //         },
  //       },
  //       "/foo": {
  //         target: "http://172.17.7.249:3000",
  //         ws: true,
  //         changeOrigin: true,
  //         //以'^/foo'开头的地址都会被''空代替
  //         pathRewrite: {
  //           "^/foo": "",
  //         },
  //       },
  //     },
  //   },
};
