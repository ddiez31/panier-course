var Produit = function(nom, prix) {
    this.nom = nom;
    this.prix = prix;
};

var Panier = function() {
    this.totalHT = 0;
    this.ajoute = function(objet) {
        this.totalHT = Math.round((this.totalHT + objet.prix) * 100) / 100;
        this.totalTTC = Math.round((this.totalHT * 1.20) * 100) / 100;
    };
    this.retire = function(objet) {
        this.totalHT = Math.round((this.totalHT - objet.prix) * 100) / 100;
        this.totalTTC = Math.round((this.totalHT * 1.20) * 100) / 100;
    };
};

var baguette = new Produit('Baguette', 0.85); // prix HT
var croissant = new Produit('Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC);

var Viennoiserie = Object.create(Produit);
Viennoiserie.frais = Boolean;

console.log(Viennoiserie);