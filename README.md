# olbd-project

Authors: [@Moritz Meister](https://github.com/moritzmeister)  [@Jacqueline Neef](https://github.com/jackiefeen)

We used open data published by the Ayuntamiento de Madrid on [Museums](https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=118f2fdbecc63410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default) and [Monuments](https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=69e30c658f6a8410VgnVCM2000000c205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default), preprocessed it, defined a resource naming strategy, built an ontology (reusing the existing ontologies schema.org and vcard) linked it to external data (wikipedia and Ayuntamiento de Madrid) and transformed it to RDF linked data.
<br>
<br>The result is a web application in which you can explore the monuments and museums of Madrid, navigate based on context and find additional information.

For running our web app locally on your machine please follow these steps:

0) Clone our repository
1) Install [Apache Jena Fuseki](https://jena.apache.org/download/index.cgi) and start it locally: ```./fuseki-server --update --mem /ds```
2) Import the RDF file (V9) into Fuseki. Name the dataset with "MuseumsandMonumentsMadrid" so the endpoint matches the frontend-app queries.
3) Make sure to have angular and node.js installed. [More infos in this tutorial](https://angular.io/guide/quickstart)
4) ```cd webapp``` into the webapp directory
5) ```npm install``` to install the dependencies
6) Run the webapp: ```ng serve --open```

We hope you enjoy our linked data application - if you have any questions or feedback, do not hesitate to contact us.

