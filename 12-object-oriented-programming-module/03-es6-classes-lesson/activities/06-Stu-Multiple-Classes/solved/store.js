class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  processProductSale(name) {
    this.stock.filter(obj => { return obj.name === name; }).forEach(item => {
      this.revenue += item.price;
      if (item.count == 0) { console.log("Out of stock"); }
      else {
        item.count -= 1;
      }
    })
  }

  replenishStock(name, count) {
    this.stock.filter(obj => { return obj.name === name; }).forEach(item => {
      item.count += count;
    })
  }
}

module.exports = Store;
