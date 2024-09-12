import { IDog } from "./IDog";
import { IEmployee } from "./IEmployee";

export class Employee implements IEmployee {
    public readonly name: string;
    private _dogs: IDog[];
    protected _category: string;
    public constructor(name: string, category: string) {
        this.name = name;
        this._category = category;
        this._dogs = [];
    }
    public getDogByName(name: string): IDog {
        return this._dogs.find(dog => dog.name === name);
    }
    public get category(): string {
        return this._category;
    }
    public set category(newCategory: string) {
        this._category = newCategory;
    }
    public get dogs(): IDog[] {
        return this._dogs;
    }
    public addDog(dog: IDog): Promise<IDog> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.dogs.push(dog);
                resolve(dog);
            }, 1000);
        });
    }
    public removeDogByName(dogName: string): void {
        this._dogs = this._dogs.filter(dog => dog.name !== dogName);
    }
   
}

