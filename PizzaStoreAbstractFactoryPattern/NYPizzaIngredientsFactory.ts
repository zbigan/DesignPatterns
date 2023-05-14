import Cheese from "./ingredients/cheese/Cheese";
import RegianoCheese from "./ingredients/cheese/ReggianoCheese";
import Dough from "./ingredients/dough/Dough";
import ThickCrustDough from "./ingredients/dough/ThickCrustDough";
import Pepperoni from "./ingredients/pepperoni/Pepperoni";
import SlicedPepperoni from "./ingredients/pepperoni/SlicedPepperoni";
import MarinaraSauce from "./ingredients/sauce/MarinaraSauce";
import Sauce from "./ingredients/sauce/Sauce";
import Garlic from "./ingredients/toppings/Garlic";
import Mushroom from "./ingredients/toppings/Mushroom";
import Onion from "./ingredients/toppings/Onion";
import RedPepper from "./ingredients/toppings/RedPepper";
import Topping from "./ingredients/toppings/Topping";
import { IngredientsFactory } from "./PizzaStore";

export default class NYPizzaIngredientsFactory implements IngredientsFactory {
  createDough(): Dough {
    return new ThickCrustDough()
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }
  createSauce(): Sauce {
    return new MarinaraSauce()
  }
  craeteCheese(): Cheese {
    return new RegianoCheese()
  }
  createToppings(): Topping[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()]
  }
}
