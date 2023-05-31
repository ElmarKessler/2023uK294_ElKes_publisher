# README #

Zweck dieses Projektes ist es ein REST-Api zu verfügung zu stellen. Für dies wird das bestehende package json-server mit json-server-auth und express genutzt. 

### Beschreibung ###

Die Basis dieses Servers ist das package json-server-auth: 
[link zu der Dokumentation](https://github.com/jeremyben/json-server-auth#readme)
Die Dokumentation über die Authentifizierung und Authorisierung ist dort abgelegt. Basis ist jedenfalls die Datei routes

Beim builden des Images werden alle json-Dateien aus dem Verzeichnis **jsons** miteinander zu der Datei db zusammengefügt. Der json-server startet dann. Zusätzlich können jedoch die Routes abgesichert werden. Dies geschieht mittels dem File routes.json. Aktuell sind **alle** Endpoints abgesichert.

Folgende Dateien (somit Endpoints) gibt es in diesem Image:
(Bitte immer hier nachführen, wenn Datein entfernt oder hinzugefügt werden)

- address
- address_status
- author
- book
- book_author
- book_language
- cars
- country 
- cust_order 
- customer 
- customer_address 
- employee 
- job 
- order_history 
- order_line 
- order_status 
- penguins
- pokemons
- publisher 
- rickandmorty 
- shipping_method

### Wie erstelle ich das Image? ### 
`docker build -t registry.noseryoung.ch/noseryoung/restdb .`
### Image in unsere Registry pushen ###
`docker push registry.noseryoung.ch/noseryoung/restdb`
### Wie starte ich einen container? ###
`docker run -p 3000:3000 --name restdb -d registry.noseryoung.ch/noseryoung/restdb`

da jedoch der Port 3000 meistens von React benutzt wird, lieber einen anderen Port nutzen z.Bsp 3030:

`docker run -p 3030:3000 --name restdb -d registry.noseryoung.ch/noseryoung/restdb`
