class Penyimpanan<T> {
  private data: T;

  constructor(initial: T) {
    this.data = initial;
  }

  ambil(): T {
    return this.data;
  }
}

const simpanString = new Penyimpanan<string>("Data Awal");
console.log(simpanString.ambil());

const simpanAngka = new Penyimpanan<number>(99);
console.log(simpanAngka.ambil());
