import { IDog } from "./IDog";

export interface IEmployee {
    readonly name: string;
    dogs: IDog[];
    category: string;
    addDog(dog: IDog): any;
    removeDogByName(dogName: string): void;
}