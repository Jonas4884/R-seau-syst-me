# Mise en place d'un serveur NFS
#### Il est necessaire de passer en mode root pour les configurations suivantes
            -ajouter sudo pour chaque commandes ou sudo su sur Ubuntu

##            Côté serveur
### 1-Installation du packet
        root@jonathan:~# apt-get update
        root@jonathan:~# apt install nfs-kernel-server
### 2-Creer le repertoire de partage
        root@jonathan:~# mkdir /mnt/partage
### 3-Configurer le repertoire /etc/exports
        root@jonathan:~# nano /etc/exports


