import Pizza from "./Pizza"

export default class ChicagoMargarittaPizza extends Pizza {
  description: string

  constructor(description: string) {
    super()
    this.description = description

    console.log(`\n${this.description}:`)

    this.makeDough('fat')
    this.addSauce('soft')
    this.addCheese('mozarella')
  }
}
