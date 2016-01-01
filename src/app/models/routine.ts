import {Lift} from './lift';

export class Routine {
    public id:number;
    public name: string;
    public lifts: Lift[];
    public lastCompletedTime: string;
    
    constructor(name: string, lifts: Lift[],
      lastCompletedTime: string = 'No last recorded time.') {
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
    
    static fromJson(json: JSON): Routine {
      return new Routine(json.name, json.lifts.map(Lift.fromJson), json.lastCompletedTime);
    }
}