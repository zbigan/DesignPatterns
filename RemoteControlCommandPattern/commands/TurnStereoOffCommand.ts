import CommandObject from "../CommandObject";
import Stereo, { Source } from "../vendor_classes/Stereo";


export default class TurnStereoOffCommand implements CommandObject {
  stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }
  
  execute(): void {
    this.stereo.off()
  }

  undo(): void {
    this.stereo.on()
  }
}
