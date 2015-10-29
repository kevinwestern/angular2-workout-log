export class Routine {
    public name: string;
    public lifts: string[];
    public lastCompletedTime: string;
    constructor(name: string, lifts: string[],
      lastCompletedTime: string = 'No last recorded time.') {
        this.name = name;
        this.lifts = lifts;
        this.lastCompletedTime = lastCompletedTime;
    }
}