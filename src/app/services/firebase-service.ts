import {Injectable} from 'angular2/angular2';
import {RoutineEntry} from '../models/routine-entry';
import {Routine} from '../models/routine';


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
      lifts: entry.liftEntries
    };
    entriesRef.update(update);
  }
  
  createRoutineEntry(entry: RoutineEntry): string {
    const routinePath = 'routines/' + entry.routine.name;
    const routineUpdate = {};
    routineUpdate[routinePath] = entry.routine;
    entry.routine.lastCompletedTime = Firebase.ServerValue.TIMESTAMP;
    this.firebase.update(routineUpdate);
        
    const entriesRef = this.firebase.child('entries');
    const entriesUpdate = {
      routine: entry.routine.name,
      lifts: entry.liftEntries,
      createdTime: Firebase.ServerValue.TIMESTAMP
    };
    const key = entriesRef.push(entriesUpdate).key();
    return key;
  }
  
  getRoutineEntry(id: string): Promise<RoutineEntry> {
    const entriesRef = this.firebase.child(`entries/${id}`);
    return new Promise((resolve, reject) => {
      entriesRef.once('value', (e) => {
        const entry = e.val();
        this.firebase.child(`routines/${entry.routine}`).once('value', (l) => {
          resolve(RoutineEntry.fromJson(e.key(), l.val(), entry));
        }, reject)
      }, reject);
    });
  }
  
  getRoutines(): Promise<Routine[]> {
    const routinesRef = this.firebase.child('routines/');
    return new Promise((resolve, reject) => {
      routinesRef.orderByKey().once('value', (r) => {
        const routines = r.val();
        resolve(Object.keys(routines).map((k) => Routine.fromJson(routines[k])))
      }, reject)
    });
  }
}