# Apa itu TypeScript?

TypeScript adalah bahasa pemrograman yang dikembangkan oleh Microsoft. TypeScript adalah bahasa pemrograman yang dapat digunakan untuk mengembangkan aplikasi web, mobile, dan desktop. TypeScript memiliki fitur-fitur seperti tipe data statis, generasi kode, dan integrasi dengan framework dan library populer.

TypeScript (TS) adalah versi upgrade dari JavaScript. Dia nambahin fitur static typing, alias kita bisa nentuin tipe data dari awal (kayak di Java, C#, dll), jadi lebih aman dan jelas.

## Contoh pembeda simple

```bash
// JavaScript
function greet(name) {
  return "Hello " + name;
}
// TypeScript
function greet(name: string): string {
    return "Hello " + name;
    }
```

Nah, yang : string itu tipe data. Jadi lebih jelas, dan kalau salah input (misalnya number), langsung ketahuan sebelum dijalanin.

## Kenapa TypeScript?

- **Bisa bantu cegah bug sejak awal**
- **Membuat kode lebih mudah dibaca**
- **Dukung fitur OOP (Object Oriented Programming)**
- **Bisa digunakan bersama dengan framework dan library populer**
- **Dapat meningkatkan produktivitas pengembang**

## Cara Install

1. Pastikan telah install Node.js
2. Jalankan perintah `npm install -g typescript` di terminal
3. Cek apakah TypeScript telah terinstall dengan menjalankan perintah `tsc -v`
4. Bikin project pertama `mkdir project` dan `cd project` lalu jalankan `tsc --init` untuk membuat file `tsconfig.json`
5. Buat file `index.ts` dan tulis kode TypeScript di dalamnya
6. Jalankan perintah `tsc` untuk mengompilasi kode TypeScript menjadi kode JavaScript
7. Jalankan perintah `node index.js` untuk menjalankan kode JavaScript
8. Cek hasilnya di browser atau terminal
