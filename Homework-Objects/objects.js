var animal= {
    type: "dog",
    name: "Milo",
    gut: ["rice", "carrot",],
    gutadd: function (gutadd) {
        this.gut.push (gutadd);
        console.log(gutadd);
        
    }
};

console.log(animal);

console.log("before :", animal.gut);
animal.gutadd(["turkey", "potato", "broccoli"]);
console.log("full belly:", animal.gut);
