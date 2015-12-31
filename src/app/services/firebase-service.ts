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
    const routinePath = 'lifts/' + entry.routine.name;
    const routineUpdate = {};
    routineUpdate[routinePath] = entry.routine;
    entry.routine.lastCompletedTime = Firebase.ServerValue.TIMESTAMP;
    this.firebase.update(routineUpdate);
        
    const entriesRef = this.firebase.child('entries');
    const entriesUpdate = {};
    entriesUpdate[entry.routine.name] = entry.liftEntries;
    const key = entriesRef.push(entriesUpdate).key();
    console.log(key);
  }
}