let user: string = "Mikumiestu";
let aktif: boolean = true;
let old: number = 21;

let hobi : string[] = ["ngoding", "main game", "nonton film"];
let dataDiri : [string, number] = ["Mikuiestu", 21];

enum Status {
    Aktif,
    NonAktif,
    Pending
}

let statusSaya: Status = Status.Aktif;

console.log(user, old, aktif, hobi, dataDiri, statusSaya);

// Cara menjalankan code
// Pada terminal ketikkan 'tsc latihan.ts'
// Kemudian ketikkan 'node latihan.js' untuk menjalankan code