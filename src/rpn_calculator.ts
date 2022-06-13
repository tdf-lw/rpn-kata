import { Stack } from "./stack";

export class RPNCalculator {
    stack: Stack = new Stack();
    public constructor(public readonly value: string) {
        let charList = value.split(" ");
        for (let i=charList.length-1; i>=0; i--) {
           this.stack.push(charList[i]);
        }
    }

    public calculate() {
        let tempStack: Stack =  new Stack();
        let currCount = 0;
        while (!this.stack.isEmpty()) {
            let val: string =  this.stack.pop();
            if (this.isNumeric(val)) {
                tempStack.push(val);
            } else {
                // value is op
                if (val ===  'SQRT') {
                    let val1: string = tempStack.pop();
                    currCount = this.squareroot(Number(val1));
                } else if (val === 'MAX') {
                    currCount = this.max(tempStack);
                }else if (currCount == 0) {
                    let val1: string = tempStack.pop();
                    let val2: string = tempStack.pop();
                    if (this.isOp(val)) {    
                        currCount = eval(val2 + val + val1);
                    }
                } else {
                    let val1: string = tempStack.pop();
                    currCount = eval(currCount + val + val1)
                }
            }
        }
       return(currCount);
    }

    private isNumeric = (val: string) : boolean => {
        return !isNaN(Number(val));
    }

    private isOp = (val: string) : boolean => {
        return val ===  "/" || val === "*" || val === "+" || val === "-";
    }

    private squareroot(val: number) {
        for (var i = 0; i * i <= val; i++) {
            if (i * i === val)
                return i;
       }
       return val; // if nothing found return original value
    }

    private max(stack: Stack) {
        let largest = -10000000000
        while(!stack.isEmpty()) {
            let val1: number = Number(stack.pop());
            if (Number(val1) > largest)
                largest = val1;
       }
       return largest;
    }
}