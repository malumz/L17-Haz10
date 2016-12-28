var aNumber = document.getElementById("aNumber");
var bNumber = document.getElementById("bNumber");
var pSalida = document.getElementById("salida");



function calcular() {
    var valaNumber = aNumber.value;
    var valbNumber = bNumber.value;
    var suma = parseInt(valaNumber)+parseInt(valbNumber);

    //var valA = Anum.value;
    //var valB = Bnum.value;

    var isaNumber = true;
    var isbNumber = false;


    if (valaNumber == "" || valbNumber == "") {
        aNumber.placeholder="Rellenar el campo!";
        aNumber.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
        bNumber.placeholder="Rellenar el campo!";
        bNumber.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
    } else {
        bNumber.style.backgroundColor = "#fff";
        aNumber.style.backgroundColor = "#fff";


      if (valaNumber == "10" || valbNumber == "10") {
            pSalida.innerHTML = "1";
        } 

    else if ( suma==10) {
        pSalida.innerHTML = "1";
    }

    
      else {
            pSalida.innerHTML = " No hay 10 por ningun lado!";
        }
    }
}