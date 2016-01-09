import {Component, NgFor, Input} from 'angular2/angular2';
import {Lift, LiftSet, Routine} from '../../models';
import {Database} from '../../services/database-service';
import {MessageOrDate} from '../../pipes/messageordate';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
  selector: 'routine-snapshot',
  templateUrl: '/src/app/components/routine-snapshot/routine-snapshot.html',
  directives: [NgFor, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.Emulated,
  pipes: [MessageOrDate],
  //styleUrls: ['app/components/routine-snapshot/routine-snapshot.css'],
  styles: [`
    :host {
      display: block;
    }
    
    h3 {
      font-size: 24px;
      font-weight: 500;
    }
    
    h5 {
      color: rgba(0, 0, 0, .54);
      font-style: italic;
    }
    `]
})
export class RoutineSnapshot {
  @Input()
  routine: Routine;
  
  constructor(
    private database: Database,
    private router: Router) {
  }
  
  startWorkout() {
    const createSets = (lift: Lift): LiftSet[] => {
      const sets = [];
      for(let i = 0; i < lift.setCount; i++) {
        sets.push({
          suggestedReps: lift.suggestedReps,
          suggestedWeight: 100,
        });
      }
      return sets;
    };
 
    if (this.routine) {
      const now = Date.now();
      if (!this.routine.entries) {
        this.routine.entries = [];
      }
      this.routine.entries.push({
       timestamp: now,
       lifts: this.routine.lifts.map(lift => {
         return {
           lift: lift,
           sets: createSets(lift)
         };
       })
      });
      this.routine.lastCompletedTime = now;
      this.database.saveRoutine(this.routine)
      this.router.navigate(['/RoutineLogger', {id: now}])
    }
  }
}