function lancerLoto() {
    $('.resultats').html('');
    var nombres = getLoto();    
    afficherResultats(nombres);
    afficherMontantsGagnes(nombres);
}

////////////////////////////////////////////////////////////

var MIN_NUM = 1;
var MAX_NUM = 49;
var MAX_COMPL = 10;
var NUM_LOTO = 5;
var lotonum = initialiserLoto(MAX_NUM);
function getLoto() {
    var nombres = lotonum.slice();
    var loto = [];

    var pickedNombre;
    for(var i = MIN_NUM; i <= NUM_LOTO; ++i) {
        pickedNombre = Math.ceil(Math.random() * MAX_NUM) + 1;

        var check = nombres[pickedNombre];
        if(check) {
            loto[i] = check;
        } else {
            --i;
            continue;
        }
        nombres.splice(pickedNombre, 1);
    }

    nombres = initialiserLoto(MAX_COMPL);
    loto[NUM_LOTO + 1] = nombres[parseInt(Math.random() * MAX_COMPL) + 1];

    return loto;
}

function initialiserLoto (max) {
    var grille = [];
    for(var i = MIN_NUM; i <= max; ++i) {
        grille[i] = i;
    }
    return grille;
}


////////////////////////////////////////////////////////////

function getLoto2() {
    var nombres = [];
    for(var i = 0 ; i < 5; i++){
        nombres[i] = leNumeroQuiSort(nombres);
    }
    nombres[5] = getRandomNombre(1, 10);
    return nombres;
}

function afficherResultats(nombres) {
    for(var i = 0; i < nombres.length; i++){
        $('#res'+i).html(nombres[i+1]);
    }
}

function leNumeroQuiSort(nombres) {
    var leNombre = getRandomNombre(1, 49);
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
    max++;
    var nombre = parseInt(Math.random() * max);
    if (nombre < min || nombre >= max) {
        return getRandomNombre(min, max);
    }else return nombre;
}