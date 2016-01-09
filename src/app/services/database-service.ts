import {Injectable} from 'angular2/angular2';
import {Entry} from '../models';
import {Routine} from '../models';


@Injectable()
export class AppLocalStorage {
  constructor() {
    if (!localStorage.getItem('routines')) {
      localStorage.setItem('routines', JSON.stringify(_SEED_DATA_ROUTINES))
    }
  }
  
  getRoutines(): Routine[] {
    return JSON.parse(localStorage.getItem('routines'));
  }
  
  saveRoutine(routine: Routine) {
    const routines = this.getRoutines();
    const index = routines.findIndex(r => r.name == routine.name);
    routines[index] = routine;
    localStorage.setItem('routines', JSON.stringify(routines));
  }
}

/**
 * Database Service provides offline saving to IndexedDB.
 */
@Injectable()
export class Database {
  constructor(private db: AppLocalStorage) {}
  
  getRoutines(): Promise<Routine[]> {
    // TODO: Check connection
    return Promise.resolve(this.db.getRoutines());
  }
  
  saveRoutine(routine: Routine) {
    this.db.saveRoutine(routine);
  }
  
  getRoutineByEntryId(id: number): Routine {
    return this.db.getRoutines()
      .find(routine => routine.entries && !!routine.entries.find(entry => entry.timestamp == id));
  }
}

const _SEED_DATA_ROUTINES = [{
  "lastCompletedTime" : 0,
  "lifts" : [ {
    "name" : "Deadlift",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Barbell Row",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Wide-Grip Pull-up or Chin-Up",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Close-grip lat pulldown",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Barbell shurgs",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Ab Circuits",
    "setCount" : 3,
    "suggestedReps" : 6
  } ],
  "name" : "Back & Abs"
}, {
  "lastCompletedTime" : 1451787168267,
  "lifts" : [ {
    "name" : "Incline Barbell Bench Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Incline Dumbell Bench Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Flat Barbell Bench Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "(Optional) Dip",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Calf Workout A",
    "setCount" : 3,
    "suggestedReps" : 6
  } ],
  "name" : "Chest & Calves"
}, {
  "lastCompletedTime" : 1451787709611,
  "lifts" : [ {
    "name" : "Barbell Squat",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Leg Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Romanian Deadlift",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Side Lateral Raise",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Bent-Over Rear Delt Raise",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Calc Workout C",
    "setCount" : 3,
    "suggestedReps" : 6
  } ],
  "name" : "Legs and Shoulders"
}, {
  "lastCompletedTime" : 1451787693021,
  "lifts" : [ {
    "name" : "Barbell Military Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Side Lateral Raise",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Bent-over Rear Delt Raise",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Face Pulls",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Calf Workout B",
    "setCount" : 3,
    "suggestedReps" : 6
  } ],
  "name" : "Shoulders & Calves"
}, {
  "lastCompletedTime" : 1451787701874,
  "lifts" : [ {
    "name" : "Incline Barbell Benchpress",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Barbell Curl",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Close-Grip Bench Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Alternating Dumbbell Curl",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Seated Triceps Press",
    "setCount" : 3,
    "suggestedReps" : 6
  }, {
    "name" : "Ab Circuits",
    "setCount" : 3,
    "suggestedReps" : 6
  } ],
  "name" : "Upper Body & Abs"
}];