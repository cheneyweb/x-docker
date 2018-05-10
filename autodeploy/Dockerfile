# FROM node
FROM mhart/alpine-node:latest
#创建应用目录
RUN mkdir -p /usr/node/autodeploy
#设置工作目录
WORKDIR /usr/node/autodeploy
#复制所有文件到工作目录
COPY . /usr/node/autodeploy
#编译运行node项目
RUN npm install
#运行命令
CMD ["npm", "start"]
