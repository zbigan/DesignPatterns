import Pizza from "./Pizza";

export type PizzaType = 'cheese' | 'pepperoni' | 'margaritta'

export default abstract class PizzaStore {
  constructor() {}

  public orderPizza(type: PizzaType): Pizza | undefined {
    const pizza = this.makePizza(type)

    if (!pizza) return

    pizza.bake()
    pizza.cut()
    pizza.pack()

    return pizza
  }

  public abstract makePizza(type: string): Pizza | null
}
