import {Lift} from './lift';

export class Routine {
    public id:number;
    public name: string;
    public lifts: Lift[];
    public lastCompletedTime: string;
    
    constructor(id: number, name: string, lifts: Lift[],
      lastCompletedTime: string = 'No last recorded time.') {
        this.id = id;
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
}