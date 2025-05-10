interface Buku {
  judul: string;
  penulis: string;
  tahunTerbit?: number;
}

const bukuFavorit: Buku = {
  judul: "Belajar TypeScript",
  penulis: "Mikumiestu"
};

function tampilkanBuku(b: Buku): void {
  console.log(`"${b.judul}" oleh ${b.penulis}`);
  if (b.tahunTerbit) {
    console.log(`Tahun terbit: ${b.tahunTerbit}`);
  }
}

tampilkanBuku(bukuFavorit);
