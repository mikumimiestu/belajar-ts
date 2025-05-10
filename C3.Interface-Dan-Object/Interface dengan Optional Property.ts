// Kadang kita ga butuh semua data

interface Produk {
  nama: string;
  harga: number;
  diskon?: number; // Optional
}

let item: Produk = {
  nama: "Kaos Mikumi",
  harga: 150000
};
