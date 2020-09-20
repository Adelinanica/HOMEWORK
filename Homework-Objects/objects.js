var animal = {
  type: "dog",
  name: "Milo",
  gut: ["rice", "carrot"],
  gutadd: function (gutadd) {
    // to add an item to an array you need to use this.gut.push(gutadd)
    // we can't concatenate arrays like we can with strings
    this.gut = this.gut + " " + gutadd;
    console.log(gutadd);
  },
};

console.log(animal);

console.log("before :", animal.gut);
animal.gutadd(["turkey", "potato", "broccoli"]);
console.log("full belly:", animal.gut);
