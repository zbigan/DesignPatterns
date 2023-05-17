import CommandObject from "./CommandObject";

const DEFAULT_COMMAND: CommandObject = {
  execute() {console.log('default execute')},
  undo() {console.log('default undo')}
}

const SLOTS_TOTAL = 7

export default class RemoteControl {
  private onButtons: CommandObject[]
  private offButtons: CommandObject[]
  private lastCommandsUsed: CommandObject[]

  constructor() {
    this.onButtons = new Array(SLOTS_TOTAL).fill(DEFAULT_COMMAND)
    this.offButtons = new Array(SLOTS_TOTAL).fill(DEFAULT_COMMAND)
    this.lastCommandsUsed = []
  }

  public setSlot(slot: number, onCommand: CommandObject, offCommand: CommandObject) {
    this.onButtons[slot] = onCommand
    this.offButtons[slot] = offCommand
  }

  public pressOnButton(slot: number) {
    this.onButtons[slot].execute()
    this.lastCommandsUsed.push(this.onButtons[slot])
  }

  public pressOffButton(slot: number) {
    this.offButtons[slot].execute()
    this.lastCommandsUsed.push(this.offButtons[slot])
  }

  public pressUndoButton() {
    const lastCommand = this.lastCommandsUsed.pop()
    if (lastCommand) {
      lastCommand.undo()
    } else {
      DEFAULT_COMMAND.undo()
    }
  }
}
