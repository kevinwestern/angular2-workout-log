export interface Routine {
  name: string,
  lastCompletedTime: number,
  lifts: Lift[],
  entries?: Entry[]
};

export interface Lift {
  name: string,
  setCount: number,
  suggestedReps: number,
}

export interface Entry {
  timestamp: number,
  lifts: LiftEntry[],
}

export interface LiftEntry {
  lift: Lift,
  sets: LiftSet[]
}

export interface LiftSet {
   suggestedReps: number,
   suggestedWeight: number,
   actualReps?: number
   actualWeight?: number,
}
