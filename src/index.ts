import { Dog } from "./Dog";
import { Employee } from "./Employee";
import { K9 } from "./K9";
import { Puppy } from "./Puppy";


const dogs: Record<string, Dog> = {
    hilde: new Dog("Hilde", "guard"),
    zeus: new Dog("Zeus", "search"),
    pride: new Dog("Pride", "patrol"),
    loki: new Dog("Loki", "search")
}
const employees: Record<string, Employee> = {
    bing: new Employee("Chendler Bing", "guard"),
    holms: new Employee("Sherlock Holmes", "search"),
    dorian: new Employee("John Dorian", "patrol")
}

function checkEmployees(): void {
    const employee = employees.holms;
    employee.addDog(dogs.loki)
        .then((dog: any) => {
            console.log(dog.name + " was added!");
        })
        .catch((error) => console.log(error));
    employee.addDog(dogs.zeus);
    console.log("employee has two dogs!", employee);
    employee.removeDogByName("Loki");
    console.log("employee has one dog again!", employee);
}

function checkK9(): void {
    const k9 = new K9();
    k9.addDog(dogs.hilde);
    console.log("current dogs:", k9.dogs);
    k9.addEmployee(employees.bing);
    console.log("current employees:", k9.employees);
    k9.setDogToEmployee("Chendler Bing", "Hilde");
    console.log("current employees after dog was assigned:", k9.employees);
    console.log("Employee found by dog!", k9.findEmployeeByDog("Hilde"));
    k9.removeDogAndEmployee("Chendler Bing", "Hilde");
    console.log(k9.dogs);
    console.log(k9.employees);
}


function checkPuppy():void {
    const puppy = new Puppy("Hilde", "guard", true);
    console.log(puppy._isPuppy);
    puppy.checkPuppy("Loki");
    console.log(puppy._isPuppy);
}
checkEmployees();
checkK9();
checkPuppy();