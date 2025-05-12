// Kadang kita punya union type (string | number), tapi kita mau beda perlakuan tergantung tipe yang aktif.

function cetakInfo(info: string | number): void {
  if (typeof info === "string") {
    console.log("Ini string:", info.toUpperCase());
  } else {
    console.log("Ini number:", info.toFixed(2));
  }
}

cetakInfo("Mikumi");
cetakInfo(3.14159);

// typeof bantu TypeScript “narrow” tipe datanya biar kita bisa akses method yang sesuai.

// Contoh dengan in Operator:

type Admin = { role: "admin"; akses: string[] };
type Guest = { role: "guest"; limit: number };

function cekRole(user: Admin | Guest): void {
  if ("akses" in user) {
    console.log("Admin akses:", user.akses.join(", "));
  } else {
    console.log("Guest limit:", user.limit);
  }
}
