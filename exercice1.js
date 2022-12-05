let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

document.getElementById("Name").innerHTML = "Nom: " + voiture.Nom;
document.getElementById("Roues").innerHTML = "Nombre de roues: " + voiture.nombresRoues;
document.getElementById("Color").innerHTML = "Couleur: " + voiture.Couleur;
document.getElementById("Construteur").innerHTML = "Constructeur: " + voiture.Contructeur;
document.getElementById("Carburant").innerHTML = "Carburant: " + voiture.Carburant;
document.getElementById("NbrePortes").innerHTML = "Nombre de portes: " + voiture.nombrePortes;
document.getElementById("Autonomie").innerHTML = "Autonomie: " + voiture.Autonomie;
document.getElementById("VMax").innerHTML = "Vitesse max: " + voiture.vitesseMaxi;
document.getElementById("image").setAttribute("src", "https://images.caradisiac.com/logos/9/"
    + "9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg" )





