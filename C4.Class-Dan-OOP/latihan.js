var Laptop = /** @class */ (function () {
    function Laptop(merkLaptop, kapasitasRam) {
        this.merk = merkLaptop;
        this.ramGB = kapasitasRam;
    }
    Laptop.prototype.nyalakan = function () {
        console.log("".concat(this.merk, " dengan RAM ").concat(this.ramGB, "GB sedang dinyalakan"));
    };
    return Laptop;
}());
var laptopZaki = new Laptop("ASUS", 16);
laptopZaki.nyalakan();
