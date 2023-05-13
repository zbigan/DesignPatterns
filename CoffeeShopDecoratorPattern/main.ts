import Espresso from "./Espresso";
import Mocha from "./Mocha";

let beverage1 = new Espresso()
console.log('price of espresso:', beverage1.cost())
console.log('description of espresso:', beverage1.getDescription())

beverage1 = new Mocha(beverage1)
console.log('price of espresso with mocha:', beverage1.cost())
console.log('description of espresso with mocha:', beverage1.getDescription())

