// enum (enumeration) dipakai buat mendefinisikan sekumpulan nilai tetap. Cocok buat hal-hal kayak status, role user, jenis produk, dll.
// Contoh sederhana :

enum Hari {
  Senin,
  Selasa,
  Rabu,
  Kamis,
  Jumat,
  Sabtu,
  Minggu
}

let hariIni: Hari = Hari.Selasa;
console.log(hariIni); // Output: 1

// Default-nya enum pakai angka (Senin = 0, Selasa = 1, dst).

// Enum dengan Nilai String :

enum StatusPesanan {
  Pending = "Menunggu",
  Dikirim = "Dikirim",
  Diterima = "Diterima"
}

const statusSekarang: StatusPesanan = StatusPesanan.Dikirim;
console.log("Status pesanan:", statusSekarang);
// Output: Status pesanan: Dikirim