import Pizza from "./Pizza"

export default class NYPepperoniPizza extends Pizza {
  name: string

  constructor(name: string) {
    super()
    this.name = name
    this.dough = 'crust'
    this.sauce = 'chilli'
    this.cheese = 'mozarella'
    this.toppings = ['pepperoni']
  }
}
