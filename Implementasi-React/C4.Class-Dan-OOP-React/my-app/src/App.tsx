import { MahasiswaAktif } from "./models/MahasiswaAktif";

function App() {
  const mhs1 = new MahasiswaAktif("Zaki Mushthafa", "221051", "Informatika", 6);
  const mhs2 = new MahasiswaAktif("Mikumiestu", "221099", "Data Science", 4);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa Aktif</h1>
      <div className="space-y-3">
        <div className="bg-white p-4 rounded shadow">{mhs1.getStatus()}</div>
        <div className="bg-white p-4 rounded shadow">{mhs2.getStatus()}</div>
      </div>
    </div>
  );
}

export default App;
