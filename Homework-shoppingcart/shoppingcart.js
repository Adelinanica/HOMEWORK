class shoppingCart {
  constructor(items, totalPrice) {
    this.items = [];
    this.totalPrice = 0;
  }

  addItem(
    product,
    price // parametrii
  ) {
    this.items.push(product);

<<<<<<< HEAD
    removeItem(product, price){
      const indexOfItemToBeRemoved= this.items.findIndex(item => item === product);
      this.items.splice(indexOfItemToBeRemoved,1);
        this.totalPrice=this.totalPrice - price;
        
       
    
    }

   total(){
     console.log(shoppingCart.totalPrice, shoppingCart.items.length)
        
       
  }
}



    const cart1 = new shoppingCart ();
     cart1.addItem("eggs", 1.99);
    cart1.addItem("meat", 6.99);
    cart1.addItem("juice", 1.40);
    cart1.addItem("biscuits", 3.50);
    console.log(cart1.items, cart1.totalPrice);
    cart1.removeItem("juice", 1.40);
   console.log(cart1.items, cart1.totalPrice);
    console.log(cart1.totalPrice);
    console.log(cart1.items.length);
   
    
=======
    this.totalPrice = this.totalPrice + price;
  }
>>>>>>> master

  removeItem(item, price) {
    // shift removes the first element from the list. You need to remove the item that is received from the parameter.
    // to remove an item from the list based on a condition you can do it in multiple ways:
    // 1. You can use findIndex to get the index of the item that you actually want to delete.
    // with the index you can use splice to delete it from the array
    // 2. You can use filter to get the list without the element that you want to delete and then write
    // this.items = filteredItems;
    this.items.shift(item);
    this.totalPrice = this.totalPrice - price;
  }

  // total should do a console.log with the length of the items array and the totalPrice
  total(totalPrice, items) {
    this.totalPrice = this.totalPrice;
    this.items = items.length;
  }
}

<<<<<<< HEAD
    const cart4 =new shoppingCart ();
    cart4.addItem("meat", 5.90);
    cart4.addItem("biscuit", 2.00);
    console.log(cart4.items, cart4.totalPrice);
     cart4.removeItem("meat", 5.90);
    console.log(cart4.items, cart4.totalPrice)

    
=======
const cart1 = new shoppingCart();
cart1.addItem("eggs", 1.99);
cart1.addItem("meat", 6.99);
cart1.addItem("juice", 1.4);
cart1.addItem("biscuits", 3.5);
console.log(cart1.items, cart1.totalPrice);
cart1.removeItem("juice", 1.4);
//instead of the next line you should call the total method
console.log(cart1.items, cart1.totalPrice);
console.log(cart1.totalPrice);
console.log(cart1.items.length);
>>>>>>> master

const cart2 = new shoppingCart();
cart2.addItem("chocolate", 2.5);
cart2.addItem("dog food", 6.0);
cart2.addItem("sugar", 1.2);
cart2.addItem("oil", 2.7);
cart2.addItem("flour", 2.5);
cart2.addItem("lollypop", 1.8);
console.log(cart2.items, cart2.totalPrice);
cart2.removeItem("lollipop", 1.8);
console.log(cart2.items, cart2.totalPrice);
console.log(cart2.totalPrice);
console.log(cart2.items.length);

const cart3 = new shoppingCart();
cart3.addItem("milk", 2.8);
cart3.addItem("carrots", 1.5);
cart3.addItem("bread", 0.8);
cart3.addItem("oats", 2.2);
cart3.addItem("yogurt", 3.0);
cart3.addItem("cheese", 2.8);
console.log(cart3.items, cart3.totalPrice);
cart3.removeItem("carrots", 1.5);
console.log(cart3.items, cart3.totalPrice);
console.log(cart3.totalPrice);
console.log(cart3.items.length);
