// ini js

//  function hasil(){
//     let alas = document.getElementById("alasSegitiga").Value;
//     let tinggi = document.getElementById("tinggiSegitiga").Value;
//     let hasil = parseInt(alasSegitiga) * parseInt(tinggiSegitiga)

//     console.log(hasil)
//  }

function luasSegitiga() {
   let alas = document.getElementById("alas").value;
   let tinggi = document.getElementById("tinggi").value;
   let luas = 0.5 * alas * tinggi;
   document.getElementById(
     "hasilLuas"
   ).innerHTML = `HASIL LUAS : <br> ${0.5} x ${alas} x ${tinggi} = ${luas}`;
   }

   function resetLuas() {
      document.getElementById("alas").value = "";
      document.getElementById("tinggi").value = "";
      document.getElementById("hasilLuas").innerHTML = "HASIL LUAS : ";
    }