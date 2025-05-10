class Kendaraan {
  merek: string;
  roda: number;

  constructor(merekInput: string, jumlahRoda: number) {
    this.merek = merekInput;
    this.roda = jumlahRoda;
  }

  jalan(): void {
    console.log(`${this.merek} sedang berjalan dengan ${this.roda} roda`);
  }
}

const motor = new Kendaraan("Yamaha", 2);
motor.jalan(); // Yamaha sedang berjalan dengan 2 roda


// 📝 Penjelasan:

// class Kendaraan = bikin blueprint.
// constructor() = fungsi yang dipanggil saat object dibuat.
// this.nama = nunjuk ke properti dalam class itu sendiri.
// void artinya fungsi itu nggak mengembalikan nilai (hanya print doang).