# brenpucek-interpreter
A broken and unfinished Brainfuck Interpreter in Typescript

## Todo
---
- [x] `+`
- [x] `-` 
- [x] `<` 
- [x] `>` 
- [x] `.` 
- [ ] `,` : *Not implemented yet*
- [ ] `[` : *Not implemented yet*
- [ ] `]` : *Not implemented yet*

## Usage
---
```ts
import interpreter from "./interpreter.ts"

const test = interpreter('+++--->+++<+++')

console.log(test)   // { Number: [ 3, 3 ], ASCII: [] }
```

## Example
---
Run 'Hello World!':
```
deno run example.ts
```
