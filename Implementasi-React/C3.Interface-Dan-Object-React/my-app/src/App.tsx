import ProductCard from "./components/ProductCard";

function App() {
  const daftarProduk = [
    {
      id: 1,
      nama: "Roti Bakar",
      harga: 15000,
      stok: 20,
      kategori: "makanan" as const,
    },
    {
      id: 2,
      nama: "Teh Tarik",
      harga: 10000,
      stok: 35,
      kategori: "minuman" as const,
    },
    {
      id: 3,
      nama: "Gelang Karet",
      harga: 5000,
      stok: 50,
      kategori: "aksesoris" as const,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      {daftarProduk.map((produk) => (
        <ProductCard key={produk.id} item={produk} />
      ))}
    </div>
  );
}

export default App;
