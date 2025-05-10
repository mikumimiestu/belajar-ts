class Smartphone {
  merk: string = "Tanpa Merek";
  isSmart: boolean = true;

  info(): void {
    console.log(`Merk: ${this.merk}, Smart: ${this.isSmart}`);
  }
}

const hp1 = new Smartphone();
hp1.info();
