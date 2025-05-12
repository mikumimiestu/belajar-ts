import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [following, setFollowing] = useState<string[]>([]);

  const handleToggleFollow = (user: string) => {
    setFollowing((prev) =>
      prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
    );
  };

  const users = ["mikumiestu", "alyachan", "kucingdev"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengguna</h1>
      {users.map((user) => (
        <UserCard
          key={user}
          username={user}
          isFollowing={following.includes(user)}
          onToggleFollow={handleToggleFollow}
        />
      ))}
    </div>
  );
}

export default App;
