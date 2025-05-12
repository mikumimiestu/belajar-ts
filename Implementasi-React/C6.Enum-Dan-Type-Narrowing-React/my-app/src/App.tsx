import type { DataKaryawan } from "./models/KaryawanModel";
import { StatusKerja } from "./models/KaryawanModel";
import KaryawanInfo from "./components/KaryawanInfo";

const daftarKaryawan: DataKaryawan[] = [
  { namaLengkap: "Rina Andini", idKaryawan: "KRY001", status: StatusKerja.Tetap },
  { namaLengkap: "Joko Santoso", idKaryawan: "KRY002", status: StatusKerja.Kontrak },
  { namaLengkap: "Dewi Ayu", idKaryawan: "KRY003", status: StatusKerja.Magang },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Data Karyawan</h1>
      {daftarKaryawan.map((item, idx) => (
        <KaryawanInfo key={idx} info={item} />
      ))}
    </div>
  );
}
