# brenpucek-interpreter

A Yet Another 'unfinished' Brainf*ck Interpreter in Typescript

## Todo
- [x] `+`
- [x] `-` 
- [x] `<` 
- [x] `>` 
- [x] `.` 
- [ ] `,` : *Not implemented yet*
- [ ] `[` : *Not implemented yet*
- [ ] `]` : *Not implemented yet*

## Usage
- Print 'Hello World!' manual print without loop
```bf
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
```
