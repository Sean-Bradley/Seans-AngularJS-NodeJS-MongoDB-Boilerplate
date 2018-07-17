FROM nginx
LABEL Sean Bradley <seanwasere@gmail.com>
COPY ./nginx.conf		/etc/nginx/nginx.conf
#COPY ./nginx.crt		/etc/nginx/nginx.crt
#COPY ./nginx.key		/etc/nginx/nginx.key
COPY ./www			/usr/share/nginx/html
#EXPOSE 8443
#EXPOSE 443
EXPOSE 80