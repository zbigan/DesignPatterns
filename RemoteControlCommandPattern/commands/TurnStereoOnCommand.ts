import CommandObject from "../CommandObject";
import Stereo, { Source } from "../vendor_classes/Stereo";


export default class TurnStereoOnCommand implements CommandObject {
  stereo: Stereo
  prevSource: Source
  prevVolume: number

  constructor(stereo: Stereo) {
    this.stereo = stereo
    this.prevSource = stereo.getSource()
    this.prevVolume = stereo.getVolume()
  }

  execute(): void {
    const currentVolume = this.stereo.getVolume()
    const currentSource = this.stereo.getSource()

    this.stereo.on()
    this.stereo.setSource('cd')
    this.stereo.setVolume(11)
    
    this.prevVolume = currentVolume
    this.prevSource = currentSource
  }

  undo(): void {
    this.stereo.setVolume(this.prevVolume)
    this.stereo.setSource(this.prevSource)
    this.stereo.off()
  }
}