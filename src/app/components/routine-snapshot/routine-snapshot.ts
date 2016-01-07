import {Component, NgFor, Input} from 'angular2/angular2';
import {Routine} from '../../models/routine';
import {RoutineEntry} from '../../models/routine-entry';
import {Database} from '../../services/database-service';
import {RoutineService} from '../../services/routine-service';
import {MessageOrDate} from '../../pipes/messageordate';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

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
    private params: RouteParams,
    private routineService: RoutineService,
    private database: Database,
    private router: Router) {
    let id = params.get('id');
    if (id != null) {
      this.routine = routineService.get(parseInt(id, 10));
    }
  }
  
  startWorkout() {
    if (this.routine) {
      this.database.createRoutineEntry(new RoutineEntry(this.routine)).then((id) => {
        this.router.navigate(['/RoutineLogger', {id}])
      })
    }
  }
}