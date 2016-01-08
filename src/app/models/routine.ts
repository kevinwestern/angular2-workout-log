import {Lift} from './lift';

export class Routine {
    public name: string;
    public lifts: Lift[];
    public lastCompletedTime: number;
    
    constructor(name: string, lifts: Lift[], lastCompletedTime?: number) {
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
    
    toJson(): any {
      return {
        name: this.name,
        lifts: this.lifts.map((lift) => lift.toJson()),
        lastCompletedTime: this.lastCompletedTime
      }
    }
    
    static fromJson(json: JSON): Routine {
      return new Routine(json.name, json.lifts.map(Lift.fromJson), json.lastCompletedTime);
    }
}