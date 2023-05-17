import CommandObject from "../CommandObject";
import Stereo, { Source } from "../vendor_classes/Stereo";


export default class TurnStereoWithCdOffCommand implements CommandObject {
  private stereo: Stereo
  private prevVolume: number
  private prevSource: Source

  constructor(stereo: Stereo) {
    this.stereo = stereo
    this.prevVolume = stereo.getVolume()
    this.prevSource = stereo.getSource()
  }
  
  public execute(): void {
    this.prevVolume = this.stereo.getVolume()
    this.prevSource = this.stereo.getSource()

    this.stereo.setVolume(Stereo.defaultVolume)
    this.stereo.setSource(Stereo.defaultSource)
    this.stereo.off()
  }

  public undo(): void {
    this.stereo.on()
    this.stereo.setSource(this.prevSource)
    this.stereo.setVolume(this.prevVolume)
  }
}
