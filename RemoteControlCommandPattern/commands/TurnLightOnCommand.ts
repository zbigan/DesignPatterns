import CommandObject from "../CommandObject";
import Light from "../vendor_classes/Light";

export default class TurnLightOnCommand implements CommandObject {
  light: Light
  
  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.on()
  }

  undo(): void {
    this.light.off()
  }
}
