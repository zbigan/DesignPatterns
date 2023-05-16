import CommandObject from "../CommandObject";
import Light from "../vendor_classes/Light";

export default class TurnLightOffCommand implements CommandObject {
  light: Light
  
  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.off()
  }

  undo(): void {
    this.light.on()
  }
}
