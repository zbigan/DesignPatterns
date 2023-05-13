import NYCheesePizza from "./NYCheesePizza";
import NYMargarittaPizza from "./NYMargarittaPizza";
import NYPepperoniPizza from "./NYPepperoniPizza";
import Pizza from "./Pizza";
import PizzaStore, { PizzaType } from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore {
  constructor() {
    super()
  }

  public makePizza(type: PizzaType): Pizza | null {
    if (type==='cheese') return new NYCheesePizza('Ny style cheese pizza')
    if (type==='pepperoni') return new NYPepperoniPizza('Ny style pepperoni pizza')
    if (type==='margaritta') return new NYMargarittaPizza('Ny style margaritta pizza')
    
    return null
  }
}
