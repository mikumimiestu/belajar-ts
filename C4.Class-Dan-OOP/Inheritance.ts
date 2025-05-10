class Hewan {
  jenis: string;

  constructor(jenisHewan: string) {
    this.jenis = jenisHewan;
  }

  suara(): void {
    console.log(`${this.jenis} bersuara`);
  }
}

class KucingRumahan extends Hewan {
  namaKucing: string;

  constructor(nama: string) {
    super("Kucing");
    this.namaKucing = nama;
  }

  meong(): void {
    console.log(`${this.namaKucing} berkata meong~`);
  }
}

const siMomo = new KucingRumahan("Momo");
siMomo.suara();
siMomo.meong();


// 📝 KucingRumahan extends class Hewan = pewarisan sifat.