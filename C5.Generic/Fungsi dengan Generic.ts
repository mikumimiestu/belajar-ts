function tampilkanData<T>(data: T): T {
  return data;
}

console.log(tampilkanData<number>(123)); // angka
console.log(tampilkanData<string>("Halo Mikumi")); // string
console.log(tampilkanData<boolean>(true)); // boolean

// T bisa jadi apapun, dan bisa tentuin saat memanggil fungsinya