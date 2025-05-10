var user = "Mikumiestu";
var aktif = true;
var old = 21;
var hobi = ["ngoding", "main game", "nonton film"];
var dataDiri = ["Mikuiestu", 21];
var Status;
(function (Status) {
    Status[Status["Aktif"] = 0] = "Aktif";
    Status[Status["NonAktif"] = 1] = "NonAktif";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var statusSaya = Status.Aktif;
console.log(user, old, aktif, hobi, dataDiri, statusSaya);
// Cara menjalankan code
// Pada terminal ketikkan 'tsc latihan.ts'
// Kemudian ketikkan 'node latihan.js' untuk menjalankan code
