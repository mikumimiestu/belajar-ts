// public (default): bisa diakses dari mana saja
// private: hanya bisa diakses dari dalam class itu sendiri
// protected: bisa diakses dari class itu sendiri dan turunannya (subclass)

class AkunBank {
  private saldo: number = 0;

  setSaldo(jumlah: number): void {
    this.saldo = jumlah;
  }

  cekSaldo(): number {
    return this.saldo;
  }
}

const akunSaya = new AkunBank();
akunSaya.setSaldo(50000);
console.log("Saldo saya: " + akunSaya.cekSaldo());

// 📝 saldo gak bisa diakses langsung dari luar, harus lewat fungsi setSaldo dan cekSaldo.