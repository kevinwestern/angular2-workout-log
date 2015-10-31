import {Injectable} from 'angular2/angular2';
import {Routine} from '../models/routine';
import {ROUTINES} from '../mocks/routines';

@Injectable()
export class RoutineService {
  private routines: Routine[];
  
  constructor() {
      this.routines = ROUTINES;
  }
  
  getRoutines() {
      return this.routines;
  }
  
  get (id: number): Routine {
    return this.routines[id];
  }
}