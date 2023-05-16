import CommandObject from "../CommandObject";
import GarageDoor from "../vendor_classes/GarageDoor";

export default class CloseGarageDoorCommand implements CommandObject {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.down()
  }
  
  undo(): void {
    this.garageDoor.up()
  }
}
