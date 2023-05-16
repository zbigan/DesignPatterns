import CommandObject from "../CommandObject";
import GarageDoor from "../vendor_classes/GarageDoor";

export default class OpenGarageDoorCommand implements CommandObject {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.up()
  }
  
  undo(): void {
    this.garageDoor.down()
  }
}
