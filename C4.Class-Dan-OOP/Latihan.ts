class Laptop {
  merk: string;
  ramGB: number;

  constructor(merkLaptop: string, kapasitasRam: number) {
    this.merk = merkLaptop;
    this.ramGB = kapasitasRam;
  }

  nyalakan(): void {
    console.log(`${this.merk} dengan RAM ${this.ramGB}GB sedang dinyalakan`);
  }
}

const laptopZaki = new Laptop("ASUS", 16);
laptopZaki.nyalakan();
