import CommandObject from "./CommandObject";

export default class MacroCommand implements CommandObject {
  private commands: CommandObject[]

  constructor(commands: CommandObject[]) {
    this.commands = commands
  }

  public execute(): void {
    for (const command of this.commands) {
      command.execute()
    }
  }

  public undo() {
    for (let i=this.commands.length-1; i>=0; i--) {
      this.commands[i].undo()
    }
  }
}
