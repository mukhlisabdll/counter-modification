// Fungsi untuk mendapatkan elemen DOM
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Element dengan selector "${selection}" tidak ditemukan!`);
}

class Counter {
  constructor(element, initialStock) {
    this.counter = element;
    this.stock = initialStock;
    this.initialStock = initialStock; // nilai awal untuk reset
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.stock;

    // Binding fungsi
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    // Event listeners
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    this.stock++; // Meningkatkan stok
    this.valueDOM.textContent = this.stock;
  }

  decrease() {
    if (this.stock > 0) {
      // Stok tidak bisa kurang dari nol
      this.stock--;
      this.valueDOM.textContent = this.stock;
    }
  }

  reset() {
    this.stock = 0;
    this.valueDOM.textContent = this.stock;
  }
}

// Membuat instance counter untuk masing-masing barang
const electronicItems = new Counter(getElement(".first-counter"), 50);
const consumableItems = new Counter(getElement(".second-counter"), 100);
