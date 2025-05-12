interface Product {
  id: number;
  nama: string;
  harga: number;
  stok: number;
  kategori: "makanan" | "minuman" | "aksesoris";
}

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-xl font-semibold">{item.nama}</h2>
      <p className="text-gray-600">Kategori: {item.kategori}</p>
      <p className="text-green-600 font-bold">Rp {item.harga.toLocaleString()}</p>
      <p className="text-sm text-gray-500">Stok: {item.stok}</p>
    </div>
  );
};

export default ProductCard;
