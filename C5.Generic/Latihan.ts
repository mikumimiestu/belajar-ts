function bungkusData<T>(isi: T): T {
  return isi;
}

const hasilString = bungkusData<string>("Halo Zaki");
const hasilBool = bungkusData<boolean>(true);

console.log(hasilString);
console.log(hasilBool);

// Kesimpulan Cepat:

// T = generic type, fleksibel dan aman.
// Generic berguna banget buat fungsi, class, atau interface yang butuh fleksibilitas data.
// Cocok banget buat reusable tools (kayak fetcher API, storage, dll).