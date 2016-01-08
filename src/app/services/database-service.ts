import {Injectable} from 'angular2/angular2';
import {Routine} from '../models/routine';
import {RoutineEntry} from '../models/routine-entry';



const toPromise = (src, eventName) => {
  return new Promise((resolve, reject) => {
    src[eventName] = () => resolve();
  })
};

@Injectable()
export class AppLocalStorage {
  constructor() {
    if (!localStorage.getItem('routines')) {
      localStorage.setItem('routines', JSON.stringify(_SEED_DATA_ROUTINES))
    }
    if (!localStorage.getItem('entries')) {
      localStorage.setItem('entries', "{}");
    }
  }
  
  getRoutines(): any[] {
    return JSON.parse(localStorage.getItem('routines'));
  }
  
  createRoutineEntry(entry: RoutineEntry): number {
    // super unique id generator
    const id = Date.now() + Math.floor(Math.random() * 1000);
    this.saveRoutineEntry(entry, id);
    return id;
  }
  
  saveRoutineEntry(entry: RoutineEntry, id: number) {
    const entries = JSON.parse(localStorage.getItem('entries'));
    entries[id] = entry.toJson();
    entries[id].id = id;
    localStorage.setItem('entries', JSON.stringify(entries));
  }
  
  getRoutineEntry(id: number): any {
    return JSON.parse(localStorage.getItem('entries'))[id];
  }
  
  getRoutine(name: string): any {
    return this.getRoutines().find((r) => r.name == name);
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
    return Promise.resolve(this.db.getRoutines().map(Routine.fromJson));
  }
  
  createRoutineEntry(entry: RoutineEntry): Promise<number> {
    // TODO: Check connection
    return Promise.resolve(this.db.createRoutineEntry(entry));
  }
  
  saveRoutineEntry(entry: RoutineEntry, id: number): Promise<void> {
    this.db.saveRoutineEntry(entry, id);
    return Promise.resolve();
  }
  
  getRoutineEntry(id: number): Promise<RoutineEntry> {
    // TODO: Check connection
    const entry = this.db.getRoutineEntry(id);
    const routine = this.db.getRoutine(entry.routine.name);
    return Promise.resolve(RoutineEntry.fromJson(entry.id, routine , entry));
  }
}

const _SEED_DATA_ROUTINES = [{
  "lastCompletedTime" : 0,
  "lifts" : [ {
    "name" : "Deadlift",
    "sets" : 3
  }, {
    "name" : "Barbell Row",
    "sets" : 3
  }, {
    "name" : "Wide-Grip Pull-up or Chin-Up",
    "sets" : 3
  }, {
    "name" : "Close-grip lat pulldown",
    "sets" : 3
  }, {
    "name" : "Barbell shurgs",
    "sets" : 3
  }, {
    "name" : "Ab Circuits",
    "sets" : 3
  } ],
  "name" : "Back & Abs"
}, {
  "lastCompletedTime" : 1451787168267,
  "lifts" : [ {
    "name" : "Incline Barbell Bench Press",
    "sets" : 3
  }, {
    "name" : "Incline Dumbell Bench Press",
    "sets" : 3
  }, {
    "name" : "Flat Barbell Bench Press",
    "sets" : 3
  }, {
    "name" : "(Optional) Dip",
    "sets" : 3
  }, {
    "name" : "Calf Workout A",
    "sets" : 3
  } ],
  "name" : "Chest & Calves"
}, {
  "lastCompletedTime" : 1451787709611,
  "lifts" : [ {
    "name" : "Barbell Squat",
    "sets" : 3
  }, {
    "name" : "Leg Press",
    "sets" : 3
  }, {
    "name" : "Romanian Deadlift",
    "sets" : 3
  }, {
    "name" : "Side Lateral Raise",
    "sets" : 3
  }, {
    "name" : "Bent-Over Rear Delt Raise",
    "sets" : 3
  }, {
    "name" : "Calc Workout C",
    "sets" : 3
  } ],
  "name" : "Legs and Shoulders"
}, {
  "lastCompletedTime" : 1451787693021,
  "lifts" : [ {
    "name" : "Barbell Military Press",
    "sets" : 3
  }, {
    "name" : "Side Lateral Raise",
    "sets" : 3
  }, {
    "name" : "Bent-over Rear Delt Raise",
    "sets" : 3
  }, {
    "name" : "Face Pulls",
    "sets" : 3
  }, {
    "name" : "Calf Workout B",
    "sets" : 3
  } ],
  "name" : "Shoulders & Calves"
}, {
  "lastCompletedTime" : 1451787701874,
  "lifts" : [ {
    "name" : "Incline Barbell Benchpress",
    "sets" : 3
  }, {
    "name" : "Barbell Curl",
    "sets" : 3
  }, {
    "name" : "Close-Grip Bench Press",
    "sets" : 3
  }, {
    "name" : "Alternating Dumbbell Curl",
    "sets" : 3
  }, {
    "name" : "Seated Triceps Press",
    "sets" : 3
  }, {
    "name" : "Ab Circuits",
    "sets" : 3
  } ],
  "name" : "Upper Body & Abs"
}];