import {Injectable} from 'angular2/angular2';
import {RoutineEntry} from '../models/routine-entry';

const FIREBASE_APP_ID = 'torrid-fire-5346';

@Injectable()
export class FirebaseService {
  private url:string;
  private firebase;
  
  constructor() {
    this.url = `${FIREBASE_APP_ID}.firebaseio.com/workoutlogger/dev/`;
    this.firebase = new Firebase(this.url);
  }
  
  set(data) {
    this.firebase.set(data);
  }
  
  saveRoutineEntry(entry: RoutineEntry) {
    const entriesRef = this.firebase.child('entries');
    const update = {};
    update[entry.id] = {
      enties: entry.liftEntries
    };
    entriesRef.update(update);
  }
  
  createRoutineEntry(entry: RoutineEntry): string {
    const routinePath = 'lifts/' + entry.routine.name;
    const routineUpdate = {};
    routineUpdate[routinePath] = entry.routine;
    entry.routine.lastCompletedTime = Firebase.ServerValue.TIMESTAMP;
    this.firebase.update(routineUpdate);
        
    const entriesRef = this.firebase.child('entries');
    const entriesUpdate = {};
    entriesUpdate.name = entry.routine.name;
    entriesUpdate.entries = entry.liftEntries;
    const key = entriesRef.push(entriesUpdate).key();
    return key;
  }
  
  getRoutineEntry(id: string): Promise<RoutineEntry> {
    const entriesRef = this.firebase.child(`entries/${id}`);
    return new Promise((resolve, reject) => {
      entriesRef.once('value', (e) => {
        const entry = e.val();
        this.firebase.child(`lifts/${entry.name}`).once('value', (l) => {
          resolve(RoutineEntry.fromJson(e.key(), l.val(), entry));
        }, reject)
      }, reject);
    });
  }
}