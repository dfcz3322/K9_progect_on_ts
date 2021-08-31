import { IDog } from "./IDog";
import { IEmployee } from "./IEmployee";

export class K9 {
    private _dogs: IDog[];
    private _employees: IEmployee[];
    public constructor() {
        this._dogs = [];
        this._employees = [];
    }

    public get employees(): IEmployee[] {
        return this._employees;
    }

    public addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }

    public get dogs(): IDog[] {
        return this._dogs;
    }

    public addDog(dog: IDog): void {
        this.dogs.push(dog);
    }

    public setDogToEmployee(employeeName: string, dogName: string): void {
        const employee = this.employees.find((employee: IEmployee) => employee.name === employeeName);
        const dog = this.dogs.find((dog: IDog) => dog.name === dogName);
        employee.addDog(dog).then((dog: IDog) => console.log(dog.name + " was added!"));
    }

    public removeDogAndEmployee(employeeName: string, dogName: string): void {
        this._employees = this.employees.filter((employee: IEmployee) => employee.name !== employeeName);
        this._dogs = this.dogs.filter(dog => dog.name !== dogName);
    }

    public findEmployeeByDog(dogName: string): IEmployee {
        return this.employees.find((employee: IEmployee) => {
            return employee.dogs.find((dog) => dog.name === dogName);
        });
    }
}