function interpreter(code: string) {
    const arrayScript: string[] = code.split('')
    let currentValue: number = 0
    let currentCell: number = 0
    let resultNumber: number[] = []
    let resultAscii: string[] = []
    let loopMode: boolean = false
    const ascii: string[] = [
        'NUL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 'BS', 'TAB', 'LF', 'VT', 'FF', 'CR',
        'SO', 'SI', 'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB', 'CAN', 'EM', 'SUB', 'ESC',
        'FS', 'GS', 'RS', 'US', ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
        '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z', '{', '|', '}', '~', 'DEL'
    ]

    for (let index = 0; index <= arrayScript.length; index++) {
        if (arrayScript[index] == undefined) {
            return {
                Number: resultNumber,
                ASCII: resultAscii
            }
        } else {
            function loop(): void {
                while (loopMode) {
                    
                }
            }
            switch (arrayScript[index]) {
                case '+':
                    if (currentValue == 255) {
                        currentValue = 0
                    } else {
                        currentValue += 1
                    }
                    resultNumber[currentCell] = currentValue
                    break;
                case '-':
                    if (currentValue == 0) {
                        currentValue = 0
                    } else {
                        currentValue -= 1
                    }
                    resultNumber[currentCell] = currentValue
                    break;
                case '<':
                    if (currentCell == 0) {
                        currentCell = 0
                    }
                    currentCell -= 1
                    currentValue = resultNumber[currentCell]
                    break;
                case '>':
                    if (!resultNumber[currentCell + 1]) {
                        resultNumber.push(0)
                    }
                    currentCell += 1
                    currentValue = resultNumber[currentCell]
                    break;
                case '.':
                    resultAscii.push(ascii[currentValue])
                    break;
                case ',':
                    break;
                case '[':
                    if (currentValue == 0) {
                        
                    } else {
                        loop()
                    }
                    break;
                case ']':
                    break;
                default:
                    break;
            }
        }

    }
}

export default interpreter