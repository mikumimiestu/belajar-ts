<div align="center">
  <img class="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="50"/>
  <img class="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="50"/>
  <img class="tech-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50"/>
</div>

# Apa Itu TypeScript?

TypeScript adalah bahasa pemrograman yang dikembangkan oleh Microsoft. TypeScript adalah bahasa pemrograman yang dapat digunakan untuk mengembangkan aplikasi web, mobile, dan desktop. TypeScript memiliki fitur-fitur seperti tipe data statis, generasi kode, dan integrasi dengan framework dan library populer.

TypeScript (TS) adalah versi upgrade dari JavaScript. Dia nambahin fitur static typing, alias kita bisa nentuin tipe data dari awal (kayak di Java, C#, dll), jadi lebih aman dan jelas.

Pada modul ini akan membahas tentang dasar-dasar TypeScript, termasuk sintaks, tipe data, dan contoh penggunaan. Nantinya akan di implementasikan dengan menggunakan React Tsx

---

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

## Perbedaan Utama

| Fitur           | JavaScript (JS) | TypeScript (TS)       | React (TSX)                  |
| --------------- | --------------- | --------------------- | ---------------------------- |
| **Typing**      | Dinamis         | Statis                | Statis + Komponen            |
| **Error Check** | Runtime         | Compile-time          | Compile-time                 |
| **Syntax**      | `.js`           | `.ts`                 | `.tsx` (JSX + TS)            |
| **Contoh**      | `let x = 10;`   | `let x: number = 10;` | `<Component prop={value} />` |

TypeScript membantu menangkap error **sebelum kode dijalankan**, terutama berguna untuk proyek besar! 🚀

---

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

## Repository Ini Memiliki Materi:

- [x] Tipe Data Dasar
- [x] Fungsi dan Parameter Bertipe di TypeScript
- [x] Interface dan Object
- [x] Class dan OOP di TypeScript (Diambah sedikit penjelasan karena mulai kompleks)
- [ ] Generic di TypeScript

...Masih banyak lagi!!!

---

Masih banyak materi yang belum dibahas, tapi saya akan terus menambahkan materi dan contoh kode. Jadi, jangan lupa untuk subscribe repository ini dan ikuti perkembangannya!!!

---

### Copyright

Copyright (c) 2025 by Mikumiestu
Distributed under the MIT License. See LICENSE.txt for more information.
