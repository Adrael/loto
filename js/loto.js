function lancerLoto() {
    $('.resultats').html('');
    var nombres = [];
    for(var i = 0 ; i < 5; i++){
        nombres[i] = leNumeroQuiSort(nombres);
    }
    nombres[5] = getRandomNombre(1, 11);
    afficherResultats(nombres);
    afficherMontantsGagnes(nombres);
}

function afficherResultats(nombres) {
    for(var i = 0; i < nombres.length; i++){
        $('#res'+i).html(nombres[i]);
    }
}

function leNumeroQuiSort(nombres) {
    var leNombre = getRandomNombre(1, 50);
    if (nombrePasEncoreSorti(nombres, leNombre)) {
        return leNombre;
    }else return leNumeroQuiSort(nombres);
}

function nombrePasEncoreSorti(nombres, leNombre){
    var booly = true;
    for(var i = 0; i < nombres.length; i++){
        if (nombres[i] == leNombre) {
            booly = false;
        }
    }
    return booly;
}

function getRandomNombre(min, max) {
    // la probailite que Math.random() retourne 1 et quasi nulle, donc pour 49 nombres possibles,
    // on met le maximum à 50
    var nombre = parseInt(Math.random() * max);
    if (nombre < min) {
        return getRandomNombre(min, max);
    }else return nombre;
}