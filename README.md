# x-docker
Docker实战

[构建]
>
单镜像构建: docker build -t cheney/project .
单镜像上传: docker push cheney/project
多镜像构建: docker-compose up

【查看】
>
镜像查看: docker images
进程查看: docker ps

【集群】
>
机器查看: docker-machine ls
代码部署: docker-machine scp -r [dir] m1:~
集群部署: docker-machine ssh m1 && docker stack deploy --compose-file=stack-compose.yml n1
集群节点: docker node ls
集群服务: docker service ls

【删除】
>
删除镜像: docker rmi [imageName]
彻底清理: docker system prune -a
删除集群: docker stack rm [serviceName]
删除机器: docker-machine rm [machineName]
