import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ProfileCard
        nama="Zaki Mushthafa"
        umur={21}
        online={true}
        hobi={["Ngoding", "Nonton Anime", "Makan Padang"]}
        gender="pria"
      />

      <ProfileCard
        nama="Alya Nadhira"
        umur={20}
        online={false}
        hobi={["Menulis", "Membaca"]}
        gender="wanita"
      />
    </div>
  );
}

export default App;
