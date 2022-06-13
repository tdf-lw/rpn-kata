export class Stack {
    items: any[];

    constructor(...params: any[]) {
        this.items = [...params];
    }

    push(item: any) {
        this.items.unshift(item);
    }

    pop() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
    
    isEmpty(){
        return this.items.length == 0
    }

    logItems(){
        console.log(this.items)
    }
}