import ChicagoCheesePizza from "./ChicagoCheesePizza";
import ChicagoMargarittaPizza from "./ChicagoMargarittaPizza";
import ChicagoPepperoniPizza from "./ChicagoPepperoniPizza";
import Pizza from "./Pizza";
import PizzaStore from "./PizzaStore";

export default class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super()
  }

  public makePizza(type: string): Pizza | null {
    if (type==='cheese') return new ChicagoCheesePizza('Chicago style cheese pizza')
    if (type==='pepperoni') return new ChicagoPepperoniPizza('Chicago style pepperoni pizza')
    if (type==='margarita') return new ChicagoMargarittaPizza('Chicago style margaritta pizza')
    
    return null
  }
}
