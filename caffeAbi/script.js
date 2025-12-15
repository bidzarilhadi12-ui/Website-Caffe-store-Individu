function hitung() {
let nama = document.getElementById("nama").value;
let menu = document.getElementById("menu").value;
let jumlah = document.getElementById("jumlah").value;


let harga = 0;


// LOGIC IF ELSE
if (menu === "kopi") {
harga = 15000;
} else if (menu === "teh") {
harga = 10000;
} else {
document.getElementById("output").innerHTML = "Silakan pilih menu";
return;
}


let total = harga * jumlah;


// OUTPUT
document.getElementById("output").innerHTML =
"Halo " + nama + "<br>Total Bayar: Rp " + total;
}