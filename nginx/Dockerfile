FROM nginx
# FROM smebberson/alpine-nginx:latest
# RUN rm -f /etc/nginx/nginx.conf
# RUN rm -rf /etc/nginx/conf.d
# RUN rm -rf /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./conf.d /etc/nginx/conf.d
COPY ./html /usr/share/nginx/html
