var animal = {
  type: "dog",
  name: "Milo",
  gut: ["rice", "carrot"],
  gutadd: function (gutadd) {
    this.gut.push(gutadd);
    console.log(gutadd);
  },
};

console.log(animal);

console.log("before :", animal.gut);
// here you need to add an individual food, not a list, please use the gutadd function 3 times to add the 3 items
animal.gutadd("turkey");
console.log("full belly:", animal.gut);

animal.gutadd("potato");
console.log("full belly",animal.gut);

animal.gutadd("broccoli");
console.log("full", animal.gut);



