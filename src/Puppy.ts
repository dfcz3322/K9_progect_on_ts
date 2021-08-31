import { Dog } from "./Dog";

export class Puppy extends Dog {
    private isPuppy: boolean;

    public constructor(name: string, category: string, isPuppy: boolean) {
        super(name, category);
        this.isPuppy = isPuppy;
    }
    public checkPuppy(dogName: string): void {
        if (dogName !== "hilde") {
            this.isPuppy = false;
        } else {
            this.isPuppy = true;
        };
    }

    public get _isPuppy(): boolean {
        return this.isPuppy;
    }
}
