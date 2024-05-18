// // Question 1

// type Employee = {
//   name: string;
//   department: string;
//   role: "Manager Finance & Taxation" | "Engineer" | "Intern";
//   contact?: {
//     phone: number;
//     email: string;
//   };
//   skills?: string[];
// };

// const employee: Employee = {
//   name: "Shaheer",
//   department: "Finance",
//   role: "Manager Finance & Taxation",
//   //   contact: {
//   //     phone: 123456789,
//   //     email: "xyz@gmail.com",
//   //   },
//   //   skills: ["J.S", "Python", "T.S"],
// };

//=============================================================================

// // Question 2

// type Car = {
//   engine: {
//     horsePower: number;
//   };
//   getHorsepower: () => number;
// };

// let car: Car = {
//   engine: {
//     horsePower: 1000,
//   },
//   getHorsepower: () => car.engine.horsePower,
// };

// console.log(car.getHorsepower());

// ==============================================================================

// Question 3

type Product = {
  name: string;
  price: number;
  color: string;
  inventory: {
    stock: number;
    colorOptions?: string[];
    changeColor: (newColor: string) => string;
  };
};

let product: Product = {
  name: "T-Shirt",
  price: 2999,
  color: "White",
  inventory: {
    stock: 500,
    colorOptions: ["Black", "Gray", "Yellow"],
    changeColor: (newColor: string): string => {
      product.color = newColor;
      if (newColor === "Red") {
        product.price *= 1.1;
      } else if (newColor === "Blue") {
        product.price *= 0.95;
      }
      return newColor;
    },
  },
};

// console.log(product.inventory.changeColor("Red"));
console.log(product.inventory.changeColor("Blue"));
console.log(product.price.toFixed(2));
