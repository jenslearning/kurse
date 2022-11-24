class Person {

    constructor(public nameReal: string) {
    }

    public getName(): string {
        return this.nameReal;
    }

    public setName(input: string) {
        this.nameReal = input;
    }
}

abstract class Animal {
    constructor(private name: string) { }
    move(meters: number) {
        console.log(`${this.name} moved ${meters}`);
    }
}

class Snake extends Animal {
    move(meters: number) {
        super.move(meters)
    }
}

class Pony extends Animal {
    move(meters: number) {
        super.move(meters)
    }
}

const mySnake = new Snake('Johnny');

const myPony = new Pony('Little Pony');

// not possible because abstract
//const myAnimal = new Animal('NOT POSSIBLE');