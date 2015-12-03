import {Injectable} from 'angular2/angular2';

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
}