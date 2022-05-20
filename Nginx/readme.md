# Créer une serveur Nginx
# Pour toutes les configurations,il est exigé d'être en mode root:

## 1-Installer Nginx sur un systeme basée sur linux(Debian/Ubuntu)
  Commande:
        -apt-get update <br>
        -apt-get install nginx
  ### Pour verifier:
        -nginx -v
<img src="image/verifier.png" alt="">

## 2-Configuration du serveur
  Commande: <br>
            -root@jonathan:~# nano /etc/nginx/conf.d/test.local.conf <br>
   Ajouter les configurations: 

<img src="image/nginx-conf.png" alt="">

Dans ses configurations, <br>
            -listen 80 redirige le port d'ouverture sur le port 80 <br>
            -Ces fichiex index configure le support de fichier lors du lancement du serveur <br>
            -root  /var/www/mon_test.local est le repertoire de fichier du serveur. <br>

## 3-Configuration du serveur - sites disponible et liens symboliques
            -root@jonathan:~# cd /var/www/mon_test.local
            -root@jonathan:~# nano index.html
Comme toutes les pages html,on peut mettre des balises HTML commme ci-dessous: <br>

<img src="image/nginx-html.png" alt="">

## 4-Redemarrer le service Nginx

            -root@jonathan:~# /etc/init.d/apache2 restart
## 6-Récuperer l'adresse IP et le saisir sur un navigateur.
            -root@jonathan:~# ip addr
<img src="image/nginx-IP.png" alt="">
### Vous avez une serveur Nginx fonctionnelle
<img src="image/nginx-test.png" alt="">

<br>
<a href="https://github.com/Jonas4884/Reseau-et-systeme">Revenir au liste des serveurs</a>