import interpreter from "./interpreter.ts"

const HelloWorld = interpreter(`
++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++
++++++++++ ++++++++++ ++ .          72  Print 'H'
++++++++ ++++++++++ ++++++++++ + .  101 Print 'e'
+++++++ . .                         108 Print 'l l'
+++ .                               111 Print 'o'
---------- ---------- ---------- ---------- ----------
---------- ---------- ----------
+ .                                 31  Print 'SPACE'
++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++
+++++ .                             87  Print 'W'
++++++++++ ++++++++++ ++++ .        111 Print 'o'
+++ .                               114 Print 'r'
------ .                            108 Print 'l'
-------- .                          100 Print 'd'
---------- ---------- ---------- ---------- ---------- 
---------- ------- .                33  Print '!'
`)

console.log(HelloWorld)