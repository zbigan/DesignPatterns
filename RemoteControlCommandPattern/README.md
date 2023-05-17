Remote control for turning on and off different home devices.
Remote control has 7 slots for home devices control and one undo button which undoes last action

Vendor classes are provided to us from outside (we cannot change them).
The goal is to provide flexible architecture for managing ON/OFF type commands for different devices.
Command design pattern is used here

CommandObject and RemoteControl classes do not know any specific details of vendor classes logic.
Concrete logic is encapsulated in 'execute' and 'undo' methods of Classes which implement CommandObject interface.

1. pnpm install
2. npx -y tsc
3. node build/main.js
