export const state = () => ({
  //分类列表
  categoryList: [],
  //标签列表
  tagList: [],
  //网站信息
  blogMes: {},
});

export const mutations = {
  setCategoryList(state, list) {
    state.categoryList = list;
  },
  setTagList(state, list) {
    state.tagList = list;
  },
  setBlogMes(state, item) {
    state.blogMes = item;
  },
};

export const actions = {
  //初始化仓库
  async nuxtServerInit({ commit }, { app }) {
    try {
      //获取分类列表
      console.log('初始化仓库');
      console.log('app',app);
      
      let { data: categoryList } = await app.$getCategories();
      console.log('categoryList',categoryList);
      //获取标签列表
      let { data: tagList } = await app.$getTags();
      console.log('tagList',categoryList);
      //获取网站底部备案信息
      let { data: blogMes } = await this.$getBlogMes();

      commit("setCategoryList", categoryList);
      commit("setTagList", tagList);
      commit("setBlogMes", blogMes);
    } catch (err) {
      console.log(err);
    }
  },
};

export const getters = {
  //返回名称
  getName(state) {
    return state.blogMes.name;
  },
  //返回后端url
  getWebsiteUrl(state) {
    return state.blogMes.websiteAddress;
  },
  //返回密码
  getPassword(state) {
    return state.blogMes.password;
  },
};
