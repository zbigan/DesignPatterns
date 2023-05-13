import Pizza from "./Pizza"

export default class NYPepperoniPizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    const pizza = new Pizza()

    console.log(`\n${this.description}:`)

    pizza.makeDough('crust')
    pizza.addSauce('chilli')
    pizza.addCheese('mozarella')
    pizza.addToppings(['pepperoni'])
  }
}
