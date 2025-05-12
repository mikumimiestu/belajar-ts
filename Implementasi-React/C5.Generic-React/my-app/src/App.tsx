import GenericList from "./components/GenericList";

function App() {
  const namaMahasiswa = ["Zaki", "Mikumiestu", "Ali", "Salsa"];

  const daftarProduk = [
    { id: 1, nama: "Teh Botol", harga: 5000 },
    { id: 2, nama: "Roti Bakar", harga: 15000 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-2">Daftar Mahasiswa</h1>
        <GenericList
          items={namaMahasiswa}
          renderItem={(nama) => <p className="text-blue-600">{nama}</p>}
        />
      </div>

      <div>
        <h1 className="text-xl font-bold mb-2">Daftar Produk</h1>
        <GenericList
          items={daftarProduk}
          renderItem={(produk) => (
            <div>
              <p className="font-semibold">{produk.nama}</p>
              <p className="text-green-600">Rp {produk.harga}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default App;
