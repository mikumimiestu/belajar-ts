import type { DataKaryawan } from "../models/KaryawanModel";
import { StatusKerja } from "../models/KaryawanModel";

interface Props {
  info: DataKaryawan;
}

function statusToString(status: StatusKerja): string {
  switch (status) {
    case StatusKerja.Tetap:
      return "Pegawai Tetap";
    case StatusKerja.Kontrak:
      return "Pegawai Kontrak";
    case StatusKerja.Magang:
      return "Magang";
    case StatusKerja.Resign:
      return "Sudah Resign";
    default:
      return "Status Tidak Diketahui";
  }
}

export default function KaryawanInfo({ info }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <h2 className="text-xl font-semibold">{info.namaLengkap}</h2>
      <p>ID: {info.idKaryawan}</p>
      <p>Status: {statusToString(info.status)}</p>
    </div>
  );
}
