import CloseGarageDoorCommand from "./commands/CloseGarageDoorCommand";
import OpenGarageDoorCommand from "./commands/OpenGarageDoorCommand";
import TurnLightOffCommand from "./commands/TurnLightOffCommand";
import TurnLightOnCommand from "./commands/TurnLightOnCommand";
import TurnStereoWithCdOffCommand from "./commands/TurnStereoWithCdOffCommand";
import TurnStereoWithCdOnCommand from "./commands/TurnStereoWithCdOnCommand";
import MacroCommand from "./MacroCommand";
import RemoteControl from "./RemoteControl";
import GarageDoor from "./vendor_classes/GarageDoor";
import Light from "./vendor_classes/Light";
import Stereo from "./vendor_classes/Stereo";

const remoteControl = new RemoteControl()

const light = new Light()
const garageDoor = new GarageDoor()
const stereo = new Stereo()

remoteControl.setSlot(0, new TurnLightOnCommand(light), new TurnLightOffCommand(light))
remoteControl.setSlot(1, new OpenGarageDoorCommand(garageDoor), new CloseGarageDoorCommand(garageDoor))
remoteControl.setSlot(2, new TurnStereoWithCdOnCommand(stereo), new TurnStereoWithCdOffCommand(stereo))

remoteControl.pressOnButton(0)
remoteControl.pressOffButton(0)
remoteControl.pressOnButton(1)
remoteControl.pressOffButton(1)
remoteControl.pressOnButton(2)
remoteControl.pressOffButton(2)

console.log('-----------undo button about to press-----------')
remoteControl.pressUndoButton()

const partyOn = [
  new TurnLightOnCommand(light),
  new OpenGarageDoorCommand(garageDoor),
  new TurnStereoWithCdOnCommand(stereo)
]

const partyOff = [
  new TurnLightOffCommand(light),
  new CloseGarageDoorCommand(garageDoor),
  new TurnStereoWithCdOffCommand(stereo)
]

const partyOnMacro = new MacroCommand(partyOn)
const partyOffMacro = new MacroCommand(partyOff)

remoteControl.setSlot(3, partyOnMacro, partyOffMacro)

console.log('-----------about to enter party mode-----------')
remoteControl.pressOnButton(3)
console.log('-----------about to exit party mode-----------')
remoteControl.pressOffButton(3)
console.log('-----------about to undo-----------')
remoteControl.pressUndoButton()

console.log('-----------about to undo-----------')
remoteControl.pressUndoButton()

console.log('-----------about to undo-----------')
remoteControl.pressUndoButton()

console.log('-----------about to undo-----------')
remoteControl.pressUndoButton()
