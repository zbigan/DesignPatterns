import Pizza from "./Pizza"

export default class ChicagoPepperoniPizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    console.log(`\n${this.description}:`)

    this.makeDough('fat')
    this.addSauce('chilli')
    this.addCheese('mozarella')
    this.addToppings(['pepperoni'])
  }
}
