interface Pengguna {
  username: string;
  online: boolean;
}

function sapaUser(pengguna: Pengguna): void {
  console.log(`Hai ${pengguna.username}, statusmu: ${pengguna.online ? "Online" : "Offline"}`);
}

sapaUser({ username: "mikumiestu", online: true });
