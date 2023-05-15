import Cheese from "./ingredients/cheese/Cheese";
import Dough from "./ingredients/dough/Dough";
import Pepperoni from "./ingredients/pepperoni/Pepperoni";
import Sauce from "./ingredients/sauce/Sauce";
import Topping from "./ingredients/toppings/Topping";

export interface IngredientsFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  craeteCheese(): Cheese;
  createToppings(): Topping[];
  createPepperoni(): Pepperoni;
}
