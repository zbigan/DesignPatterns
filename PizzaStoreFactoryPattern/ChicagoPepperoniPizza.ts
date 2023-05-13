import Pizza from "./Pizza"

export default class ChicagoPepperoniPizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    const pizza = new Pizza()

    console.log(`\n${this.description}:`)

    pizza.makeDough('fat')
    pizza.addSauce('chilli')
    pizza.addCheese('mozarella')
    pizza.addToppings(['pepperoni'])
  }
}
