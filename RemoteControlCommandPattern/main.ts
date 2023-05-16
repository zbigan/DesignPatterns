import CloseGarageDoorCommand from "./commands/CloseGarageDoorCommand";
import OpenGarageDoorCommand from "./commands/OpenGarageDoorCommand";
import TurnLightOffCommand from "./commands/TurnLightOffCommand";
import TurnLightOnCommand from "./commands/TurnLightOnCommand";
import TurnStereoOffCommand from "./commands/TurnStereoOffCommand";
import TurnStereoOnCommand from "./commands/TurnStereoOnCommand";
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
remoteControl.setSlot(2, new TurnStereoOnCommand(stereo), new TurnStereoOffCommand(stereo))

remoteControl.pressOnButton(0)
remoteControl.pressOffButton(0)
remoteControl.pressOnButton(1)
remoteControl.pressOffButton(1)
remoteControl.pressUndoButton()
