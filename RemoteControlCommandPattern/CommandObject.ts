export default interface CommandObject {
  execute(): void;
  undo(): void;
}
