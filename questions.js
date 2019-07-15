/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire. 
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.slice(4, 5);
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.slice(1, -1);
}
var IsString = function (texte) {
    if (typeof(texte).IsString) {
        return true;
    }
    else {
        console.log('le texte n\'est pas de type string');
    }
}
var AfficherExtensionString = function (texte) {
    texte = texte.split('.').reverse();
    return texte[0];
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1; 
}
var InverseString = function (texte) {
   texte = texte.split('').reverse().join('');
   return (texte);
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    var tableau = [];
    for(var value of array)
    {
        tableau.push(Math.abs(value))
    }
    return tableau;
}
var sufaceCercle = function (rayon) {
    var circle = Math.PI * Math.pow(rayon, 2);
    return Math.round(circle);
}
var hypothenuse = function (ab, ac) {
    // console.log(`premier coté : ${ab}, deuxieme coté : ${ac}`);
    bc = Math.pow(ab, 2) + Math.pow(ac, 2);
    // console.log(Math.sqrt(bc));
    return Math.sqrt(bc);
}
var calculIMC = function (poids, taille) {
    imc = poids / Math.pow(taille, 2);
    return Math.round(imc *100)/100;
}
