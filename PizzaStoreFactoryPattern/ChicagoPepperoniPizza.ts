import Pizza from "./Pizza"

export default class ChicagoPepperoniPizza extends Pizza {
  constructor(name: string) {
    super()
    this.name = name
    this.dough = 'fat'
    this.sauce = 'chilli'
    this.cheese = 'mozarella'
    this.toppings = ['pepperoni']
  }
}
