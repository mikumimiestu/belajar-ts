function sayHi(namaAkun) {
    return "Hi, ".concat(namaAkun, "!");
}
function jumlahkan(a, b) {
    return a + b;
}
function infoAplikasi(nama) {
    if (nama === void 0) { nama = "MyApp"; }
    console.log("Aplikasi: ".concat(nama));
}
var kali = function (x, y) { return x * y; };
sayHi("mikumiestu");
console.log(jumlahkan(10, 5));
infoAplikasi();
console.log(kali(4, 3));
