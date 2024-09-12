import { IDog } from "./IDog";

export interface IEmployee {
    readonly name: string;
    readonly dogs: IDog[];
    readonly category: string;
    addDog(dog: IDog): any;
    removeDogByName(dogName: string): void;
}