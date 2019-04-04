const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    // https://www.bilibili.com/index/recommend.json
    proxy(
      '/index/recommend.json', {
        target: 'https://www.bilibili.com',
        changeOrigin: true
      }
    )
  )

  // https://api.douban.com/v2/movie/in_theaters
  app.use(
    proxy(
      '/v2/movie/in_theaters', {
        target: 'https://api.douban.com',
        changeOrigin: true
      }
    )
  )
}

/*
  create-react-app 配置proxy跨域请求
    1、安装http-proxy-middleware: 
      yarn add http-proxy-middleware

    2、在'src'目录下新建'setupProxy.js'并写入: 
      const proxy = require('http-proxy-middleware');
      module.exports = function (app) {
        app.use(
          // https://www.bilibili.com/index/recommend.json
          proxy(
            '/index/recommend.json', {
              target: 'https://www.bilibili.com',
              changeOrigin: true
            }
          )
        )

        // https://api.douban.com/v2/movie/in_theaters
        app.use(
          proxy(
            '/v2/movie/in_theaters', {
              target: 'https://api.douban.com',
              changeOrigin: true
            }
          )
        )
      }
    3、重新启动服务，在测试组件中加入：
      componentDidMount = () => {
          axios.get('/v2/movie/in_theaters')
            .then((res) => {
                  console.log(res.data);
            })
          axios.get('/index/recommend.json')
            .then((res) => {
                  console.log(res.data);
            })
      };

    如果之前有多个，那么就多写几个对应的app.use();
   */

