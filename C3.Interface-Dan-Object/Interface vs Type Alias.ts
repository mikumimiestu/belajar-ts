// Sama-sama bisa buat struktur, tapi interface bisa di-extend (mirip inheritance)

interface Hewan {
  nama: string;
}

interface Kucing extends Hewan {
  ras: string;
}

let kucingRumah: Kucing = {
  nama: "Momo",
  ras: "Anggora"
};
