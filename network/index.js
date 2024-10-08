export default ({ $axios }, inject) => {
    // 获取标签信息
    inject('getTags', () => $axios.$get('/tags/getTags'))
    //获取分类/标签对应的文章列表(传递参数为分类/标签及对应id)
    inject('getArticleList', (name, id) => $axios.$get(`/articles/getArticleList?${name}=${id}`))
    //获取所有文章列表(不传参)
    inject('getAllArticleList', () => $axios.$get(`/articles/getArticleList`))
    //获取分类信息
    inject('getCategories', () => $axios.$get(`/categories/getCategories`))
    //获取文章评论信息（传递文章id则查询文章id对应评论）
    inject('getComment', (id) => $axios.$get(`/comment/getComment/${id}`))
    //获取留言(不传递文章id则查询留言)
    inject('getMessage', () => $axios.$get(`/comment/getComment`))
    //提交评论表单信息
    inject('submitComment', (data) => $axios.$post(`/comment/submitComment`, data))
    //获取最新评论
    inject('getLatestComment', () => $axios.$get(`/comment/getLatestComment`))
    //获取文章内容
    inject('getArticleContent', (id) => $axios.$get(`/articles/getArticleDetail/${id}`))
    //将文章已读数加一
    inject('addReadNum', (id) => $axios.$get(`/articles/addReadNum/${id}`))
    //将文章喜欢数加一
    inject('addLikeNum', (id) => $axios.$get(`/articles/addLikeNum/${id}`))
    //获取关于页信息
    inject('getAbout', () => $axios.$get(`/about/getAbout`))
}