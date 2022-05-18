# Tutoriel d'installation de quelques serveur sur linux

### Serveur web:
            Apache
            Nginx
### Systeme de fichier en reseau:
            Vstpd
            NFS
            Samba


## Installation du serveur Apache


### Apache est un logiciel de serveur web gratuit et open-source qui alimente environ 46% des sites web à travers le monde.

##### 1-Installation du packet
##### 2-Verifier l'installation
##### 3-Configurer du serveur
#####      3-1-Donner un nom du serveur
#####      3-2-etablir la configuration du sécurité et des permissions sur /etc/apache2/apache2.conf
#####      3-3-Mettre en place une site ou lien symbolique sur /etc/apache2/sites-avalaible pour les propriétés et /etc/apache2/sites-enabled pour les permissions
##### 4-editer le fichier HTML
##### 5-redemarrer le service apache


### Pour voir les commandes,les details sont ci-joint:

## Installation du serveur Nginx


### Nginx, prononcé comme « engine-ex », est un serveur web open-source qui, depuis son succès initial en tant que serveur web, est maintenant aussi utilisé comme reverse proxy, cache HTTP, et load balancer.

#### 1-Installation du packet
#### 2-Verifier l'installation
#### 3-Configurer du Nginx sur /etc/nginx
####      3-1-gerer les paramètres par défaut sur /etc/nginx/nginx.conf
####      3-2-gerer les autres configuration par defaut  dans /etc/nginx/conf.d
####      3-3-Mettre en place une site ou lien symbolique sur /etc/apache2/sites-avalaible pour les propriétés et /etc/apache2/sites-enabled pour les permissions
#### 4-editer le fichier HTML dans var/www/html/index.html
#### 5-redemarrer le service nginx


#### Pour voir les commandes,les details sont ci-joint:

#### Installation du serveur NFS

#### Network File System (NFS), ou système de fichiers en réseau, est une application client/serveur qui permet à un utilisateur de consulter et, éventuellement, de stocker et de mettre à jour des fichiers sur un ordinateur distant, comme s'ils étaient sur son propre ordinateur.

#### Pour cette serveur, il nous faut deux machines pour simuler la connexion CLient-Serveur

### Côté serveur
##### 1-Installation du packet nfs-utils
##### 2-Verifier l'installation
##### 3-Configuration de l'adresses IP
##### 3-Déclaraiton de l'Exports NFS sur /etc/exports
#####      3-1-Configuration du repertoire de partage
#####      3-2-gerer les permissions du client
##### 4-relancer le service NFS
##### 5-Lancer les permissions

#### Côté client
#####   parcourir les partages NFS du serveur via l'adresse IP
#####     -créer un dossier dans lequel le NFS viendra se loger
#####      -gerer les permissions (Avec firewall ou pas)
#####      -Créer des fichiers de test



#### Pour voir les commandes,les details sont ci-joint:


#### Installation du serveur vsftpd

##### vsftpd est un serveur FTP libre. Il permet de transférer des fichiers par Internet ou par le biais d'un réseau informatique local (intranet).Toute personnes en ayant l'autorisation, peut télécharger et envoyer des fichiers. Il permet la création d'un espace anonyme.

##### Pour cette serveur, il nous faut deux machines pour simuler la connexion Client-Serveur

#### Côté serveur
##### 1-Installation du packet vsftpd
##### 2-Verifier l'installation
##### 3-Configuration du serveur
#####      3-1-Configuration de base
#####      3-2-Configuration avancée
#####      3-3-Partage de dossier et chroot
##### 4-Configuration de vsftpd.conf / Partie SSL
##### 5-Configurer VSFTPD pour utiliser des utilisateurs virtuels
##### 6-Relancer le service Vsftpd

#### Côté client
#####  Introduire l'adresse IP du serveur dans la machine cliente
#####      -créer un dossier de travail/partage

##### Pour voir les commandes,les details sont ci-joint:


#### Installation du serveur Samba

##### vsFTPd est un serveur FTP libre. Il permet de transférer des fichiers par Internet ou par le biais d'un réseau informatique local (intranet).Toute personnes en ayant l'autorisation, peut télécharger et envoyer des fichiers. Il permet la création d'un espace anonyme.

#### Pour cette serveur, il nous faut deux machines pour simuler la connexion Client-Serveur(Linux/Linux ou Linux/Windows) et une reseau local

#### Côté serveur
#### 1-Installation
##### 2-Verifier l'installation
##### 3-Configuration du serveur
#####      3-1-Accéder à des ressources dans un réseau local
#####      3-2-Configuration des securités(Utilisateur,mot de passe)
#####      3-3-Partage de dossier et chroot/chmod
##### 4-Partager un dossier du système de fichiers
#### 5-Securiser le partager
#### Côté client
#####  Introduire l'adresse IP du serveur dans la machine cliente
#####      -créer un dossier de travail/partage
##### Pour voir les commandes,les details sont ci-joint:
