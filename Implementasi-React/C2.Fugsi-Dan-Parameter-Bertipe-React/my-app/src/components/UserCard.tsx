import React from "react";

interface UserCardProps {
  username: string;
  isFollowing: boolean;
  onToggleFollow: (user: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ username, isFollowing, onToggleFollow }) => {
  const handleClick = () => {
    onToggleFollow(username); // fungsi dikirim dari App
  };

  return (
    <div className="border p-4 bg-white rounded-lg shadow-sm mb-3">
      <h2 className="text-lg font-bold">@{username}</h2>
      <button
        onClick={handleClick}
        className={`mt-2 px-4 py-2 rounded text-white ${
          isFollowing ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
