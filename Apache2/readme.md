Créer une serveur Apache fonctionnelle.
Pour toutes les configurations,il est exigé d'être en mode root
    Sur Debian: user@debian:~$ su
    Sur Ubuntu: user@debian:~$ sudo su

#1-Installer Apache2 sur un systeme basée sur linux(Debian/Ubuntu)
  Commande:
        -apt-get update
        -apt-get install Apache2
  Pour verifier:
        -apache2 -v

#2-Configuration du serveur - Donner un nom du serveur
  Commande:
            -root@debian:~# nano /etc/apache2/apache2.conf
Ajouter un nom de sevuer: 
....
#ServerRoot "/etc/apache2"
ServerName www.test.fr

#3-Configuration du serveur - etablir la configuration du sécurité

            -root@debian:~# vi conf-enabled/security.conf
            :set nu
Modifier l'initial par:
...
24 #ServerTOkens Minimal
25 ServerTokens prod
#4-Configuration du serveur - 



