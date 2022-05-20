# Mise en place d'un serveur NFS
#### Il est necessaire de passer en mode root pour les configurations suivantes
            -ajouter sudo pour chaque commandes ou sudo su sur Ubuntu

##            Côté serveur
### 1-Installation du packet
        root@jonathan:~# apt-get update
        root@jonathan:~# apt install nfs-kernel-server
<img src="image/nfs.png" alt="">
### 2-Creer le repertoire de partage
        root@jonathan:~# mkdir /mnt/partage
### 3-Configurer le repertoire /etc/exports
        root@jonathan:~# nano /etc/exports
Ajouter le ligne suivante:
        /mnt/partage/ 192.168.31.133/24(rw,all_squash,sync,no_subtree_check)
<img src="image/nfs-conf.png" alt="">

### 4-relancer le service
        root@jonathan:~# service nfs-kernel-server reload
##### Pour verifier l'installation,
        root@jonathan:~# showmount -e
### 5-Utilisation des firewalls pour la machine cliente
        <img src="image/nfs-serveur.png" alt="">

#### Pour verifier l'acces,il faut s'assurer que le fichier test.txt s'affiche sur la machine cliente
        <img src="image/nfs-success-serveur - Copie.png" alt="">

##       Côté client
### 1-Installation du packet
        root@debian:~# apt install nfs-common

### 2-se diriger vers le repertoire de partage
inserer la ligne suivante:
                showmount -e 192.168.31.134
Sortie attendue: Export list for 192.168.31.134
### 3-Monter le partage sur la machine cliente
        root@debian: mount 192.168.31.134:mnt/partage/  /mnt/test
        <img src="image/nfs-success.png" alt="">
### 3-se diriger vers le repertoire de partage et tester l'accès du client
        root@debian:~# cd /mnt/partage
        root@debian:~# mkdir test.txt
#### Vous avez  une serveur NFS fonctionelle