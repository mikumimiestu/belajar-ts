function sayHi(namaAkun: string): string {
  return `Hi, ${namaAkun}!`;
}

function jumlahkan(a: number, b: number): number {
  return a + b;
}

function infoAplikasi(nama: string = "MyApp"): void {
  console.log(`Aplikasi: ${nama}`);
}

const kali = (x: number, y: number): number => x * y;

sayHi("mikumiestu");
console.log(jumlahkan(10, 5));
infoAplikasi();
console.log(kali(4, 3));
