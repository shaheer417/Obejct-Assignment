// // Question 1
let product = {
    name: "T-Shirt",
    price: 2999,
    color: "White",
    inventory: {
        stock: 500,
        colorOptions: ["Black", "Gray", "Yellow"],
        changeColor: (newColor) => {
            product.color = newColor;
            if (newColor === "Red") {
                product.price *= 1.1;
            }
            else if (newColor === "Blue") {
                product.price *= 0.95;
            }
            return newColor;
        },
    },
};
// console.log(product.inventory.changeColor("Red"));
console.log(product.inventory.changeColor("Blue"));
console.log(product.price.toFixed(2));
export {};
