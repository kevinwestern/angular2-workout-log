import {Injectable} from 'angular2/angular2';
import {Routine} from '../models/routine';
import {RoutineEntry} from '../models/routine-entry';



const toPromise = (src, eventName) => {
  return new Promise((resolve, reject) => {
    src[eventName] = () => resolve();
  })
};

@Injectable()
export class AppIndexedDB {
  private openRequest: IDBOpenDBRequest;
  private db: Promise<IDBDatabase>;
  
  constructor() {
    this.openRequest = window.indexedDB.open('e', 1);
    this.db = new Promise((resolve, reject) => {
      this.openRequest.onupgradeneeded = (e: IDBVersionChangeEvent) => {
        this._upgradeDb(e.target.result).then(resolve);
      };
      this.openRequest.onsuccess = (e: Event) => resolve(e.target.result);
    });
  }
  
  _upgradeDb(db: IDBDatabase): Promise<IDBDatabase> {
    const routinesStore = db.createObjectStore('routines', {keyPath: 'name'});
    const liftsStore = db.createObjectStore('lifts', {keyPath: 'name'});
    const entriesStore = db.createObjectStore('entries', {keyPath: '_key', autoIncrement: true});
    const completed = toPromise(routinesStore.transaction, 'oncomplete');
    return completed.then(() => {
      const routines = db.transaction('routines', 'readwrite').objectStore('routines');
       _SEED_DATA_ROUTINES.forEach((routine: any) => routines.add(routine));
       return db;
    });
  }
  
  getRoutines(): Promise<any[]> {
    return this.db.then((db) => {
      const cursorReq = db.transaction('routines', 'readonly').objectStore('routines').openCursor();
      const routines = [];
      return new Promise((resolve, reject) => {
        cursorReq.onsuccess = (e) => {
          const cursor: IDBCursor = e.target.result;
          if (cursor) {
            routines.push(cursor.value);
            cursor.continue();
          } else {
            resolve(routines);
          }
        };
        cursorReq.onerror = reject;
      });
    });
  }
  
  createRoutineEntry(entry: RoutineEntry): Promise<number> {
    return this.db.then((db) => {
      const transaction = db.transaction(["entries"], "readwrite");
      return new Promise((resolve, reject) => {
        let id = null;
        transaction.oncomplete = () => {resolve(id)};
        transaction.onerror = reject;
        const request = transaction.objectStore("entries").add(new Routine("test", []));
        request.onsuccess = (e) => {id = e.target.result;};
        request.onerror = reject;  
      });
    });
  }
}

/**
 * Database Service provides offline saving to IndexedDB.
 */
@Injectable()
export class Database {
  constructor(private db: AppIndexedDB) {
    
  }
  
  getRoutines(): Promise<Routine[]> {
    // TODO: Check connection
    return this.db.getRoutines().then((routines) => routines.map(Routine.fromJson));
  }
  
  createRoutineEntry(entry: RoutineEntry): Promise<number> {
    return this.db.createRoutineEntry(entry);
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