import {Injectable} from 'angular2/angular2';
import {Entry, Routine} from '../models';
import _SEED_DATA_ROUTINES from '../seed-data';


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

