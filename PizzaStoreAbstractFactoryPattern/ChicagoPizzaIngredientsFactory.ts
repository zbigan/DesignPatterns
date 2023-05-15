import Cheese from "./ingredients/cheese/Cheese";
import MozarellaCheese from "./ingredients/cheese/MozarellaCheese";
import Dough from "./ingredients/dough/Dough";
import ThinCrustDough from "./ingredients/dough/ThinCrustDough";
import Pepperoni from "./ingredients/pepperoni/Pepperoni";
import SlicedPepperoni from "./ingredients/pepperoni/SlicedPepperoni";
import PlumTomatoSauce from "./ingredients/sauce/PlumTomatoSauce";
import Sauce from "./ingredients/sauce/Sauce";
import Mushroom from "./ingredients/toppings/Mushroom";
import Olives from "./ingredients/toppings/Olives";
import Onion from "./ingredients/toppings/Onion";
import Topping from "./ingredients/toppings/Topping";
import { IngredientsFactory } from "./IngredientsFactory";

export default class ChicagoPizzaIngredientsFactory implements IngredientsFactory {
  createDough(): Dough {
    return new ThinCrustDough()
  }
  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }
  createSauce(): Sauce {
    return new PlumTomatoSauce()
  }
  craeteCheese(): Cheese {
    return new MozarellaCheese()
  }
  createToppings(): Topping[] {
    return [new Olives(), new Onion(), new Mushroom()]
  }
}
