import {Lift} from './lift'
import {Routine} from './routine'

export class RoutineEntry {
  public routine: Routine;
  public liftEntries: LiftEntry[];
  
  constructor(routine: Routine) {
    this.routine = routine;
    this.liftEntries = this.createLiftEntries(routine)
  }
  
  createLiftEntries(routine: Routine): LiftEntry[] {
    const result = []
    routine.lifts.forEach((lift: Lift) => {
      result.push(new LiftEntry(lift, 3, 130))
    });
    return result;
  }
}

export class LiftEntry {
  public lift: Lift;
  public numberOfSets: number;
  public suggestedWeight: number;
  public sets: SetEntry[];
  
  constructor(lift: Lift, numberOfSets: number, suggestedWeight: number) {
    this.lift = lift;
    this.suggestedWeight = suggestedWeight;
    this.sets = [];
    for (let i = 0; i < numberOfSets; i++) {
      this.sets.push(new SetEntry(6, suggestedWeight += 5))
    }
  }
}

export class SetEntry {
  public suggestedReps: number;
  public actualReps: number;
  public suggestedWeight: number;
  public actualWeight: number;
  
  constructor(suggestedReps: number, suggestedWeight: number) {
    this.suggestedReps = suggestedReps;
    this.suggestedWeight = suggestedWeight;
  }
}