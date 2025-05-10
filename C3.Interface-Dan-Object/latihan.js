var bukuFavorit = {
    judul: "Belajar TypeScript",
    penulis: "Mikumiestu"
};
function tampilkanBuku(b) {
    console.log("\"".concat(b.judul, "\" oleh ").concat(b.penulis));
    if (b.tahunTerbit) {
        console.log("Tahun terbit: ".concat(b.tahunTerbit));
    }
}
tampilkanBuku(bukuFavorit);
