import {Component, NgFor, Input} from 'angular2/angular2';
import {Routine} from '../../models/routine';
import {RoutineService} from '../../services/routine-service';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

@Component({
  selector: 'routine-snapshot',
  templateUrl: '/src/app/components/routine-snapshot/routine-snapshot.html',
  directives: [NgFor, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['app/components/routine-snapshot/routine-snapshot.css']
})
export class RoutineSnapshot {
  @Input()
  routine: Routine;
  
  constructor(params: RouteParams, routineService: RoutineService) {
    let id = params.get('id');
    if (id == null) {
      this.routine = routineService.get(parseInt(id, 10));
    }
  }
}