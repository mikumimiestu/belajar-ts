export class Mahasiswa {
  nama: string;
  nim: string;
  jurusan: string;

  constructor(nama: string, nim: string, jurusan: string) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  getInfo(): string {
    return `${this.nama} (${this.nim}) - ${this.jurusan}`;
  }
}
