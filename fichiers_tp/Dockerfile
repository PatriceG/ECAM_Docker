#image de base
FROM ubuntu
#installation de nginx
RUN apt-get -y update && apt-get -y install nginx
#copie du fichier de config de nginx
COPY default /etc/nginx/sites-available/default
#exposition du port 80
EXPOSE 80/tcp
#démarrage de nginx
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
