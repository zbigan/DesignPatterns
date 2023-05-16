export type Source = 'cd' | 'dvd' |  'radio'

export default class Stereo {
  private volume = 10
  private source: Source = 'radio'

  on() {
    console.log('turns stereo on')
  }

  off() {
    console.log('turns stereo off')
  }

  setSource(source: Source) {
    console.log(`set ${source} as source`)
    this.source = source
  }

  setVolume(volume: number) {
    console.log(`set volume to ${volume}`)
    this.volume = volume
  }

  getVolume() {
    return this.volume
  }

  getSource() {
    return this.source
  }
}
