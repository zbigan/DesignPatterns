export default class TV {
  private inputChannel = 1

  on() {
    console.log('TV on')
  }

  off() {
    console.log('TV off')
  }

  setInputChannel(channel: number) {
    this.inputChannel = channel
    console.log(`set input channel to ${channel}`)
  }
}
