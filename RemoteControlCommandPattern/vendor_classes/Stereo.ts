export type Source = 'cd' | 'dvd' |  'radio'

export default class Stereo {
  public static defaultVolume = 10
  public static defaultSource: Source = 'radio'
  private volume: number
  private source: Source

  constructor() {
    this.volume = Stereo.defaultVolume
    this.source = Stereo.defaultSource
  }

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
