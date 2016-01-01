import {Component, NgFor, Input} from 'angular2/angular2';
import {Routine} from '../../models/routine';
import {RoutineEntry} from '../../models/routine-entry';
import {FirebaseService} from '../../services/firebase-service';
import {RoutineService} from '../../services/routine-service';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'routine-snapshot',
  templateUrl: '/src/app/components/routine-snapshot/routine-snapshot.html',
  directives: [NgFor, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.Emulated,
  //styleUrls: ['app/components/routine-snapshot/routine-snapshot.css'],
  styles: [`
    :host {
      display: block;
    }
    
    .name {
      font-size: 24px;
      font-weight: 500;
    }
    
    .lift {
      line-height: 1.5em;
    }
    
    .last-update {
      color: rgba(0, 0, 0, .54);
      font-style: italic;
    }
    `]
})
export class RoutineSnapshot {
  @Input()
  routine: Routine;
  
  constructor(
    private params: RouteParams,
    private routineService: RoutineService,
    private firebase: FirebaseService,
    private router: Router) {
    let id = params.get('id');
    if (id == null) {
      this.routine = routineService.get(parseInt(id, 10));
    }
    this.firebase = firebase;
  }
  
  startWorkout() {
    if (this.routine) {
      const id = this.firebase.createRoutineEntry(new RoutineEntry(this.routine));
      this.router.navigate(['/RoutineLogger', {id}])
    }
  }
}