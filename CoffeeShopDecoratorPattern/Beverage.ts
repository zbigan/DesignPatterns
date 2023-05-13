export default abstract class Beverage {
  description: string | undefined

  getDescription() {
    return this.description
  }

  public abstract cost(): number
}
