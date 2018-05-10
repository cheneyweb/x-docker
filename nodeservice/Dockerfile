# FROM alpine-node
FROM mhart/alpine-node:latest
#复制所有文件到工作目录
COPY . /usr/node/nodeservice
#设置工作目录
WORKDIR /usr/node/nodeservice
#编译运行node项目
RUN npm install
#运行命令
CMD ["npm", "start"]
