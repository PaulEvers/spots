# Spots
Spots is een schoolproject ontwikkeld door Paul Evers. Spots is een applicatie waarbij gebruikers nieuwe steden op een interactieve manier kunnen ontdekken. Met behulp van de GPS locatie van de gebruiker worden interessante *Spots* getoond aan de gebruiker. De gebruiker kan dan meer over deze Spot te weten komen.

In deze repo zijn de volgende submodules te vinden:

 - **spots-angular**: Een prototype van Spots frontend gemaakt met behulp van het Angular framework.
 - **spots-ionic**: Een prototype van Spots frontend gemaakt met behulp van het Ionic framework.
 -  **spots-flutter**: Een prototype van Spots frontend gemaakt met behulp van het Flutter framework.
 - **spots-gateway**: De API gateway waarmee de frontend kan communiceren met de microservices.
 - **spots-eureka**: Een Eureka discovery service waarmee de gateway de endpoints van de microservices kan vinden.
 - **spots-spotservice**: Een microservice die acties gerelateerd aan Spots regelt. Denk hierbij aan het ophalen, plaatsen, en verwijderen van Spots.
 - **spots-userservice** :Een microservice die acties gerelateerd aan de gebruikers regelt. Denk hierbij aan het ophalen, registreren, en verwijderen van gebruikers.

Naast de submodules zijn er ook nog enkele andere mappen in deze repo te vinden.

## Documentatie
Hierin staat de documentatie die gedurende het project ontwikkeld is. Denk hierbij aan een projectplan, architectuurdocument, etc. Hierin is ook de PDR te vinden. Deze geeft een goed overzicht van welk werk er allemaal gedaan is binnen dit project.

## Deployment
Hier staan de bestanden die nodig zijn om de services, databases en andere benodigdheden te deployen. Denk aan docker-compose bestanden en Kubernetes configuratie bestanden.

## Functions
In deze map staat de functie die gebruikt is voor de Azure Functions FaaS.