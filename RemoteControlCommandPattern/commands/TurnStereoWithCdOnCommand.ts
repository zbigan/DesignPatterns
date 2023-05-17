import CommandObject from "../CommandObject";
import Stereo, { Source } from "../vendor_classes/Stereo";


export default class TurnStereoWithCdOnCommand implements CommandObject {
  private stereo: Stereo
  private prevSource: Source
  private prevVolume: number

  constructor(stereo: Stereo) {
    this.stereo = stereo
    this.prevSource = stereo.getSource()
    this.prevVolume = stereo.getVolume()
  }

  public execute(): void {
    this.prevVolume = this.stereo.getVolume()
    this.prevSource = this.stereo.getSource()

    this.stereo.on()
    this.stereo.setSource('cd')
    this.stereo.setVolume(11)
  }

  public undo(): void {
    this.stereo.setVolume(this.prevVolume)
    this.stereo.setSource(this.prevSource)
    this.stereo.off()
  }
}
