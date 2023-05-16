export default class Thermostat {
  private temperature = 0
  
  setTemperature(temp: number) {
    this.temperature = temp
    console.log(`set thermostat temperature to ${temp}`)
  }
}
