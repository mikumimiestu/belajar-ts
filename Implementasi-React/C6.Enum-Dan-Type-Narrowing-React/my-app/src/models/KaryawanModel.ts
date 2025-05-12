export enum StatusKerja {
  Tetap,
  Kontrak,
  Magang,
  Resign,
}

export interface DataKaryawan {
  namaLengkap: string;
  idKaryawan: string;
  status: StatusKerja;
}
