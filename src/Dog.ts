import { IDog } from "./IDog";
export class Dog implements IDog {
    public readonly name: string;
    public readonly category: string;
    protected _hasPartner: boolean = false;
    public constructor(name: string, category: string) {
        this.name = name;
        this.category = category;
    }

    public get hasPartner(): boolean {
        return this.hasPartner;
    }

    public set hasPartner(hasPartner: boolean) {
        this._hasPartner = hasPartner;
    }
}

