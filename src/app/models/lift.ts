export class Lift {
  public sets:number;
  public name:string;
  
  constructor(sets:number, name:string) {
    this.sets = sets;
    this.name = name;
  }
  
  static fromJson(json: JSON): Lift {
    return new Lift(json.sets, json.name);
  }
}