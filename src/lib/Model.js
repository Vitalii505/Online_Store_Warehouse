export class Model {
   products = [
      {
         name: "Beer",
         volume: 20,
         type: "Liquid Products",
      },
      {
         name: "Milk",
         volume: 99,
         type: "Liquid Products",
      },
      {
         name: "Sausage",
         volume: 28,
         type: "Buld Products",
      },
      {
         name: "Fish",
         volume: 45,
         type: "Buld Products",
      },
   ];
   constructor() {}
   getProducts() {
      return this.products;
   }
}
