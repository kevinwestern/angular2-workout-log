import {Lift} from './lift'
import {Routine} from './routine'

export class RoutineEntry {
  public routine: Routine;
  public liftEntries: LiftEntry[];
  public id: string;
  
  constructor(routine: Routine, entries?: LiftEntry[], id?: string) {
    this.routine = routine;
    this.liftEntries = entries || this.createLiftEntries(routine);
    this.id = id;
  }
  
  createLiftEntries(routine: Routine): LiftEntry[] {
    const result = []
    routine.lifts.forEach((lift: Lift) => {
      result.push(new LiftEntry(lift, LiftEntry.createSetsFromSuggestions(3, 130)));
    });
    return result;
  }
  
  static fromJson(id: string, routine: JSON, entry: JSON): RoutineEntry {
    return new RoutineEntry(Routine.fromJson(routine), LiftEntry.fromJson(entry), id);
  }
}

export class LiftEntry {
  public lift: Lift;
  public sets: SetEntry[];
  
  constructor(lift: Lift, sets: SetEntry[]) {
    this.lift = lift;
    this.sets = sets;
  }
  
  static createSetsFromSuggestions(numberOfSets: number, suggestedWeight: number): SetEntry[] {
    const sets = [];
    for (let i = 0; i < numberOfSets; i++) {
      sets.push(new SetEntry(6, suggestedWeight += 5))
    }
    return sets;
  }
  
  static fromJson(entry: JSON): LiftEntry[] {
    return entry.entries.map((e) => {
      return new LiftEntry(Lift.fromJson(e.lift), e.sets.map(SetEntry.fromJson))
    })
  }
}

export class SetEntry {
  public suggestedReps: number;
  public actualReps: number;
  public suggestedWeight: number;
  public actualWeight: number;
  
  constructor(suggestedReps: number, suggestedWeight: number, actualReps?: number, actualWeight?: number) {
    this.suggestedReps = suggestedReps;
    this.suggestedWeight = suggestedWeight;
  }
  
  static fromJson(json: JSON): SetEntry {
    return new SetEntry(json.suggestedReps, json.suggestedWeight, json.actualReps, json.actualWeight);
  }
}