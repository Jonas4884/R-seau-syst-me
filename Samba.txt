Tutoriel d'installation du serveur Samba
Dans tout les configuration,il faut tout d'abord disposer d'une connexion internet

1)Créer deux machines virutelles sous VMWare ou similaire(VirtualBox) à base du noyau Linux

2)Configurer les adresse IP
 Machine serveur:198.168.10.250/24
 Machine client:adresse IP par  le commande root@user:~# ifconfig

Machine serveur
  2.1 Configuration:
     Commande: root@user:~# nano /etc/network/interfaces

 #This files describes the network interfaces available on your system
 #and how to activate them. For more information,see interfaces(5)
 
 source /etc/network/interfaces.d/*
 #The loopback network interface
 auto lo
 iface lo inet loopback
 address 192.168.10.250
 netmask 255.255.255.0

=>Enregister ses configurations

  2.2 redemarrer le service de réseau
commande:root@user:~# /etc/init.d/networking restart
  
  3. Installation des packages respectifs
		Machine serveur
		  *Avec internet
			cmd: root@user:~# apt-get install samba

  4. Configurer le Nom du groupe
   commande: root@user:~# nano /etc/samba/smb.conf
	configuration:
  ....
   ===================== Global Settings ================
  [global]
   #Browsing/Identification
   # Change this to the workgroup/.......
     workgroup = Etudiant
     Server string = HEI
   #....
=>Enregistrer ses modifications
  
 5. Creer le repertoire de partage
  Cmd:root@user:~# mkdir /home/user/partage

 6. Partager ce dossier via samba

  ===================== Share Definition ===============
 ....
 [partage]
; comment = SambaShare
  browseable = yes
  writable = yes
  path = /home/user/partage

=>Enregistrer la modification

 7.Tester l'accès au partage depuis la machine physique(Windows)
   #Ouvrir l'exporateur de fichier
   #Ouvrir la section réseau
   #A la fin du chargement,entrer ceci sur la barre de navigation:
		\\192.168.10.250 (Adresse IP du machine serveur)

 8. Creer  un compte samba
   commande: root@user:~# adduser jonathan
	     root@user:~# smbpasswd -a jonathan
   New SMB password: passetude
   Retype new SMB password: passetude
   Added user jonathan
 
 9.Ressayer d'acceder à ce partage depuis la machine physique
    #Ouvrir l'exporateur de fichier
    #Ouvrir la section réseau
    #A la fin du chargement,entrer ceci sur la barre de navigation:
		\\192.168.10.250 (Adresse IP du machine serveur)
   Sur le nom utilisateur,il faut entrer le nom d'utilisateur samba
     Ici,c'est l'utilisateur "user"
   Mot de passe:passetude


 Coté client

1.Tester l'accès au partage depuis la machine cliente
	commande -root@debian:~# smbclient -L 192.168.10.250 -U jonathan
                 Enter jonathan's password:passuser
Ici l'adresse 192.168.10.250 est l'adresse IP du serveur et jonathan est l'utilisateur samba du coté serveur
		 -root@Debian:~# smbclient //192.168.10.250/partage
  
Et ainsi,la liaison entre Windows-machine serveur-machine client s'etablie
 Pour recevoir un fichier sur les machines,on peut utiliser "get fichier.txt"
 Pour creer un fichier sur les machines,on peut utiliser "put fichier.txt" 
     
              

   
 
