import Pizza from "./Pizza"

export default class ChicagoMargarittaPizza extends Pizza {
  constructor(name: string) {
    super()
    this.name = name
    this.dough = 'fat'
    this.sauce = 'soft'
    this.cheese = 'mozarella'
  }
}
