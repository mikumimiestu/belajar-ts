interface ProfileProps {
  nama: string;
  umur: number;
  online: boolean;
  hobi: string[];
  gender: "pria" | "wanita";
}

const ProfileCard = ({ nama, umur, online, hobi, gender }: ProfileProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4 bg-white">
      <h2 className="text-xl font-semibold">{nama} ({gender})</h2>
      <p className="text-gray-700">Umur: {umur} tahun</p>
      <p className="text-sm text-green-600">{online ? "Online" : "Offline"}</p>
      <ul className="list-disc ml-5 mt-2 text-gray-800">
        {hobi.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
