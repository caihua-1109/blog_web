const isProduction = process.env.NODE_ENV === "production";

export default {
  //配置网站信息
  head: {
    title: "caihua的个人博客",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  //配置启动服务器
  server: {
    host: "0.0.0.0",
    port: 4000, //4000
  },
  //配置环境变量
  // env: {
  //   baseUrl: process.env.NODE_ENV === 'dev' ? 'http://localhost:4000' : ''
  // },
  //加载进度条样式
  loading: { color: "#fff" },
  //引入css文件
  css: [
    "@/assets/css/common.css",
    "@/assets/css/iconfont.css",
    "@/assets/css/flexible.css",
  ],
  //引入插件
  plugins: [
    //axios拦截器插件
    "@/plugins/axios",
    //请求api
    "@/network/home",
    "@/network/index",
    //格式化时间
    "@/plugins/date",
  ],
  //生产及开发环境的第三方模块
  modules: ["@nuxtjs/axios"],
  //开发时的第三方模块
  buildModules: [
    //自动导入scss文件
    "@nuxtjs/style-resources",
    //下载postcss8+版本解决postcss低版本在nuxt中不生效的错误
    "@nuxt/postcss8",
  ],
  //自动导入scss文件
  styleResources: {
    scss: "@/assets/css/controller.scss",
  },
  //配置axios
  axios: {
    proxy: true, //开启反向代理
    prefix: "/blog_api", //为每个请求加上前缀/api
  },
  //配置反向代理
  proxy: isProduction
    ? {}
    : {
        //配置代理转发的url
        "/blog_api": {
          target: "http://caihuaoo.xyz",
          // target: "http://127.0.0.1:4002",
          // pathRewrite: { "^/blog_api": "" }, // 代理前将 /api 前缀去除
        },
      },
  //配置全局路由守卫中间件
  router: {
    // mode: "hash",
  },
  //webpack配置
  build: {
    postcss: {
      plugins: {
        "postcss-pxtorem": {
          rootValue: 54,
          propList: ["*", "!border", "!border-bottom", "!border-top"],
          //忽略适配css文件
          exclude: function (file) {
            return file.indexOf("flexible.css") !== -1;
          },
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  //自动引入组件
  components: {
    dirs: ["@/components", "@/components/common", "@/components/layouts"],
  },
};
