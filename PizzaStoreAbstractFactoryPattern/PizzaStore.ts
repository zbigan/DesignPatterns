import Pizza from "./Pizza";

export type PizzaType = 'cheese' | 'pepperoni' | 'margaritta'

export default abstract class PizzaStore<T extends PizzaType = PizzaType> {
  public orderPizza(type: T): Pizza | undefined {
    const pizza = this.makePizza(type)

    if (!pizza) return

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.pack()

    return pizza
  }

  public abstract makePizza(type: T): Pizza | null
}
