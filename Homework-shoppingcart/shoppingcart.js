class shoppingCart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }

  addItem(
    product,
    price // parametrii
  ) {
    this.items.push(product);
    this.totalPrice = this.totalPrice + price;
  }

  removeItem(product, price) {
    const indexOfItemToBeRemoved = this.items.findIndex(
      (item) => item === product
    );
    this.items.splice(indexOfItemToBeRemoved, 1);
    this.totalPrice = this.totalPrice - price;
  }

  total() {
    console.log(this.totalPrice , this.items.length);
  }
}

const cart1 = new shoppingCart();
cart1.addItem("eggs", 1.99);
cart1.addItem("meat", 6.99);
cart1.addItem("juice", 1.4);
cart1.addItem("biscuits", 3.5);
console.log(cart1.items, cart1.totalPrice);
cart1.removeItem("juice", 1.4);
// still need to use here the total method not to console log individual properties of the cart
cart1.total();


const cart2 = new shoppingCart();
cart2.addItem("chocolate", 2.5);
cart2.addItem("dog food", 6.0);
cart2.addItem("sugar", 1.2);
cart2.addItem("oil", 2.7);
cart2.addItem("flour", 2.5);
cart2.addItem("lollypop", 1.8);
console.log(cart2.items, cart2.totalPrice);
cart2.removeItem("lollipop", 1.8);
cart2.total();


const cart3 = new shoppingCart();
cart3.addItem("milk", 2.8);
cart3.addItem("carrots", 1.5);
cart3.addItem("bread", 0.8);
cart3.addItem("oats", 2.2);
cart3.addItem("yogurt", 3.0);
cart3.addItem("cheese", 2.8);
console.log(cart3.items, cart3.totalPrice);
cart3.removeItem("carrots", 1.5);
cart3.total();