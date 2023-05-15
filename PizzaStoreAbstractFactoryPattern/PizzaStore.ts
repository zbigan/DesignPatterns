import Cheese from "./ingredients/cheese/Cheese";
import Dough from "./ingredients/dough/Dough";
import Pepperoni from "./ingredients/pepperoni/Pepperoni";
import Sauce from "./ingredients/sauce/Sauce";
import Topping from "./ingredients/toppings/Topping";
import Pizza from "./Pizza";

export type PizzaType = 'cheese' | 'pepperoni' | 'margaritta'

export default abstract class PizzaStore {
  public orderPizza(type: PizzaType): Pizza | undefined {
    const pizza = this.makePizza(type)

    if (!pizza) return

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.pack()

    return pizza
  }

  public abstract makePizza(type: PizzaType): Pizza | null
}
