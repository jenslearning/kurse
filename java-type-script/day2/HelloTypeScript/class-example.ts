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