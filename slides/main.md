
# Introduction
Qu'est-ce que Docker?

- A première vue ça peut paraitre similaire à des VM, mais il y a des différences importantes.
- En particulier, une VM est un OS complet s'exécutant sur un OS hôte, qui peut être différent, et une VM est totalement isolée se son hôte.

- Un container partage le noyau Linux avec son hôte et tous les autres containers.
- Il n'y a une isolation qu'au niveau du système de fichiers, du réseau et des ressources CPU/RAM allouables.

- Cependant les containers sont plus léger que les VM, rapides a démarrer 
- et fournissent une solution répondant à beaucoup de besoins.

---

# A Quels besoins répond Docker

- env de dév similaire à la prod via des conteneurs
- facilité de déploiement
  - déploiement unitaire via cli docker (non conseillé pour de la prod)
  - via docker compose pour orchestrer plusieurs conteneurs sur une même machine
    - Très pratique pour le dév dès qu'on a une app non triviale (genre bdd + webapp)
    - On peut aussi l'utiliser pour déployer en prod (même si certains n'aiment pas ça, ça répond très bien à certains besoin de prod simple).
  - via Helm ou Kustomize pour déployer sur un cluster Kubernetes (le standard actuel pour la prod conteneurisée)

---

# Architecture de docker

- Docker suit une architecture client-serveur.
- Le serveur (Daemon) pilote la gestion des images et containers
- Le client (CLI) permet d'intéragir avec le serveur (qui peut être local ou distant)
- Les images sont stockées dans un registre (par défaut DockerHub, mais on peut aussi utiliser un registre privé)

![ArchiDocker](https://media.geeksforgeeks.org/wp-content/uploads/20221205115118/Architecture-of-Docker.png){style="width: 65%;"}

- Schéma tiré de https://www.geeksforgeeks.org/docker-tutorial/
  
---

# Différence entre image & container

- Une image est à un container ce qu'une classe est à une instance en POO:
  - Une image sert à créer des containers

- C'est assimilable à un file-system en lecture seule, composé d'un empilement de couches (Layers).

- Une image est crée à l'aide d'un Dockerfile, qui décrit les couches de l'image.
- On part d'une image de base, et on ajoute des couches (commandes de copie, d'installation de logiciels), pour créer l'image finale.

- On peut aussi utiliser directement des images existantes si elles répondent au besoin (ex: mysql, nginx, ...)
- C'est souvent le cas: on n'a qu'à configurer ces images au moment de leur instantiation.

---

# Instantiation directe d'un container

- C'est pratique pour essayer un outil ou l'installer rapidement sur un poste de dév.

- Ainsi pour les TP Industrialisation des Dév, SonarQube a été installé sur les VM simplement à l'aide de la commande:

```bash
docker run  -d \
    -p 9000:9000 \
    -v sonarqube_extensions:/opt/sonarqube/extensions \
    --restart unless-stopped \
    sonarqube
```

- _run:_ crée un container à partir d'une image (donnée en dernier paramètre)
- _-d:_ détache le container de la console (il tourne en arrière plan)
- _-p:_ mappe le port 9000 du container sur le port 9000 de la machine hôte
- _-v:_ mappe le volume /opt/sonarqube/extensions du container sur le volume /opt/sonarqube/extensions de la machine hôte
  Volume de données persistantes, sur l'hôte, mappé sur un dossier du container
- _--restart:_ redémarre le container si il est arrêté autrement que volontairement

---

# Principales commandes de Docker

- _docker ps_: liste les containers en cours d'exécution
- _docker ps -a_: liste les containers, même ceux qui ne sont pas en cours d'exécution

- _docker stop &lt;nom_ou_id&gt;_: arrête le container
- _docker rm &lt;nom_ou_id&gt;_: supprime le container
- _docker rmi &lt;nom_ou_id&gt;_: supprime l'image
- _docker images_: liste les images disponibles localement

- _docker build -t &lt;nom_image&gt; ._ : crée une image à partir d'un Dockerfile situé dans le dossier courant
- _docker run -d -p 8080:80 &lt;nom_image&gt;_: crée un container à partir de l'image et le démarre en arrière plan

_Note:_ on peut n'utiliser qu'un préfixe d'_id_ du moment qu'il est unique (on ne saisit souvent que les 2 ou 3 premiers caractères)

---

# Principales commandes de Docker

- _docker info_: affiche des infos sur le système Docker
- _docker inspect &lt;nom_ou_id&gt;_: affiche des infos sur le container
- _docker logs &lt;nom_ou_id&gt;_: affiche les logs du container
- _docker exec -it &lt;nom_ou_id&gt; /bin/bash_: ouvre un shell dans le container

- _docker system prune_: supprime tous les containers, images et volumes non utilisés

---

# Docker compose

- Outil qui permet de décrire un ensemble de containers à lancer ensemble.
- limité à des containers tournant sur la même machine (contrairement à Kubernetes qui permet de déployer sur un cluster).
- très pratique pour déployer des applications complexes, avec plusieurs services (ex: une bdd + une webapp)
- très pratique pour le dév, car il permet de décrire un environnement de dév similaire à la prod, avec tous les services nécessaires.

- _docker compose up_: lance les containers décrits dans le fichier docker-compose.yml
- _docker compose down_: arrête les containers décrits dans le fichier docker-compose.yml
- _docker compose logs_: affiche les logs des containers décrits dans le fichier docker-compose.yml
- _docker compose ps_: liste les containers décrits dans le fichier docker-compose.yml
- _docker compose exec &lt;nom_service&gt; &lt;commande&gt;_: exécute la commande dans le container du service donné

---

# Installation de nginx
Version avec dockerfile customisé

Nginx est un serveur web très populaire, souvent utilisé aussi comme reverse-proxy.

```bash
cd
mkdir nginx_deploy
cd nginx_deploy
code Dockerfile
```

- Nous allons commencer par spécifier l'image de base à partir de laquelle nous allons construire notre image.
- Nous n'allons pas utiliser l'image officielle afin que l'exercice soit plus didactique.
- Nous allons partir d'une image de base ubuntu, qui n'est pas la plus optimisée, mais qui nous permettra de comprendre comment fonctionne docker.

---

# Installation de nginx
Création du Dockefile

Les commandes ci-dessous sont à ajouter au fichier Dockerfile:

Dans cette image de base, nous allons installer nginx:

```dockerfile
FROM ubuntu
RUN apt-get -y update && apt-get -y install nginx
```

---

# Configuration de nginx

Ajouter la copie de ce fichier au Dockerfile:

```dockerfile
  COPY default /etc/nginx/sites-available/default
```

Exposer le port 80 hors du container:

```dockerfile  
  EXPOSE 80/tcp
```

Démarrer nginx au démarrage du container:

```dockerfile
  CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
```

---

# Dockerfile complet

Le Dockerfile complet est donc:
```dockerfile
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
```

---

# Création du fichier de configuration de nginx

- Nous allons maintenant configurer nginx pour qu'il serve une page web.
- Nginx a un fichier de configuration par défaut, mais créer un fichier de config hors du container permet une maintenance plus facile.
- Créer un fichier appelé _default_ dans le dossier courant (contant le Dockerfile) avec ce contenu:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    /usr/share/nginx/html;
    index index.html index.htm;

    server_name _;
    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

# Construction de l'image

```bash
docker build . -t ecam/nginx
```

Cette commande lance l'exécution des instructions du Dockerfile et la construction de l'image couche par couche (il y a une couche créée par commande dans le Dockerfile)


```bash
=> [1/3] FROM docker.io/library/ubuntu:latest
=> [internal] load build context
=> CACHED [2/3] RUN apt-get -y update && apt-get -y install nginx
=> CACHED [3/3] COPY default /etc/nginx/sites-available/default
=> exporting to image
=> => exporting layers
=> => writing image sha256:ad8e55ba95f0e50c6b5c70afbd262cfb7257d1d687faff1b9af85f1b642384e1
=> => naming to docker.io/ecam/nginx

```

_Note:_ on associe généralement un tag (a.k.a version) à une image pour pouvoir en référencer une version spécifique.


```bash
docker build . -t ecam/nginx:0.0.1
```

---

# Création d'une page d'accueil

Créer un dossier appelé _html_ dans le dossier courant (contenant le Dockerfile) et dans ce dossier, créer un fichier _index.html_ avec ce contenu:

```html
<!DOCTYPE html>
<html>
<head>
<title>Hello World</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

---

# Lancement du container

- Le port 80 est _exporté_ depuis le container, mais il doit être mappé sur un port de la machine hôte pour être accessible.

- Il est aussi nécessaire de mapper le dossier html du container sur le dossier html de la machine hôte.

```bash
docker run -d -p 8000:80 -v $(pwd)/html:/usr/share/nginx/html ecam/nginx:0.0.1
```

Vérifier l'état du container:

```bash
docker ps
```

La page d'accueil de nginx est accessible à l'adresse http://localhost:8000 

---

# Installation de nginx 
Version sans dockerfile

[Ce document](https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-22-04) explique comment installer nginx en utilisant l'image officielle directement.
