import CommandObject from "./CommandObject";

const DEFAULT_COMMAND: CommandObject = {
  execute() {},
  undo() {}
}

const SLOTS_TOTAL = 7

export default class RemoteControl {
  private onButtons: CommandObject[]
  private offButtons: CommandObject[]
  private lastCommandUsed: CommandObject

  constructor() {
    this.onButtons = new Array(SLOTS_TOTAL).fill(DEFAULT_COMMAND)
    this.offButtons = new Array(SLOTS_TOTAL).fill(DEFAULT_COMMAND)
    this.lastCommandUsed = DEFAULT_COMMAND
  }

  public setSlot(slot: number, onCommand: CommandObject, offCommand: CommandObject) {
    this.onButtons[slot] = onCommand
    this.offButtons[slot] = offCommand
  }

  public pressOnButton(slot: number) {
    this.onButtons[slot].execute()
    this.lastCommandUsed = this.onButtons[slot]
  }

  public pressOffButton(slot: number) {
    this.offButtons[slot].execute()
    this.lastCommandUsed = this.offButtons[slot]
  }

  public pressUndoButton() {
    this.lastCommandUsed.undo()
  }
}
