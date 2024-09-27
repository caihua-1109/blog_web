# node服务器
FROM crpi-l4eaw54bzztpe9af.cn-hangzhou.personal.cr.aliyuncs.com/caihuaoo/node:18.20.3
LABEL name="blog-nuxt2"
LABEL version="latest"
RUN mkdir -p /blog_web
COPY . /blog_web

# 暂不需要配置nginx 由nginx 容器统一管理代理
# # 安装nginx(docker创建的默认都是debian系统的容器，安装命令为apt而不是yum)
# RUN apt-get update
# # 加上-y遇到确认会继续执行
# RUN apt-get install nginx -y
# COPY ./nginx/blog-nuxt2.conf /etc/nginx/conf.d/
# COPY ./nginx/gzip.conf /etc/nginx/conf.d/
WORKDIR /blog_web
# RUN npm install
# RUN npm run build
# EXPOSE 4000
# CMD sh ./nginx.sh



# 安装依赖 （--verbose 显示详细日志） 当前dockerfile 不需要安装依赖命令 已在 github action 中安装依赖 第一次需要此命令）
# 安装项目依赖  （--legacy-peer-deps 允许安装旧版本依赖 忽略部分依赖冲突）
RUN npm install --verbose --legacy-peer-deps

# 暴露端口
EXPOSE 4000

# 启动命令
CMD ["npm", "run", "dev"]