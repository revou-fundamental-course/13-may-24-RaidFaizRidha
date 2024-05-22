// ini js

function luasSegitiga() {
   let alas = document.getElementById("alas").value;
   let tinggi = document.getElementById("tinggi").value;
   let luas = 0.5 * alas * tinggi;
   document.getElementById(
     "hasilLuas"
   ).innerHTML = `Hasil luas segitiga : <br> Alas: ${alas} <br> Tinggi: ${tinggi} <br><br> Hasil: <br> ${0.5} x ${alas} x ${tinggi} = ${luas}`;
   }

   function resetLuas() {
      document.getElementById("alas").value = "";
      document.getElementById("tinggi").value = "";
      document.getElementById("hasilLuas").innerHTML = "Hasil luas segitiga : ";
    }

    function kelilingSegitiga() {
      let sisi1 = document.getElementById("sisi1").value;
      let sisi2 = document.getElementById("sisi2").value;
      let sisi3 = document.getElementById("sisi3").value;
      let keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3)
      document.getElementById(
        "hasilKeliling"
      ).innerHTML = `Hasil keliling segitiga : <br> Sisi 1: ${sisi1} <br> Sisi 2: ${sisi2} <br> Sisi 3: ${sisi3} <br><br> Hasil: <br> ${sisi1} + ${sisi2} + ${sisi3} = ${keliling}`;
      }

      function resetKeliling() {
        document.getElementById("sisi1").value = "";
        document.getElementById("sisi2").value = "";
        document.getElementById("sisi3").value = "";
        document.getElementById("hasilKeliling").innerHTML = "Hasil keliling segitiga : ";
      }