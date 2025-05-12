import { Mahasiswa } from "./Mahasiswa";

export class MahasiswaAktif extends Mahasiswa {
  semester: number;

  constructor(nama: string, nim: string, jurusan: string, semester: number) {
    super(nama, nim, jurusan);
    this.semester = semester;
  }

  getStatus(): string {
    return `${this.getInfo()} - Semester ${this.semester}`;
  }
}
