import {Component, bootstrap, NgFor, FORM_DIRECTIVES, Input, bind} from 'angular2/angular2';
import {ROUTINES} from './mocks/routines';
import {Routine} from './models/routine';
import {DatePipe} from 'angular2/angular2';
import {MessageOrDate} from './pipes/messageordate';
import {FirebaseService} from './services/firebase-service';
import {RoutineService} from './services/routine-service';
import {RoutineSnapshot} from './components/routine-snapshot/routine-snapshot';
import {RoutineLogger} from './components/routine-logger/routine-logger';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router'


@Component({
  selector: 'routine-list',
  template: `
      <div class="app-content">
          <routine-snapshot *ng-for="#routine of routines" [routine]="routine"></routine-snapshot>
      </div>
  `,
  directives: [RoutineSnapshot, NgFor, ROUTER_DIRECTIVES],
})
class RoutineList {
  private routineService: RoutineService;
  
  public routines: Routine[]
  
  constructor(firebaseService: FirebaseService) {
    firebaseService.getRoutines().then((routines: Routine[]) => this.routines = routines);
  }
}

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', component: RoutineList },
  { path: '/routines', component: RoutineList },
  { path: '/routine/:id/edit', component: RoutineLogger, as: 'RoutineLogger'},
  { path: '/routine/:id', component: RoutineSnapshot, as: 'WorkoutRoutine' }
])
class AppComponent {
  
}
bootstrap(AppComponent, [
  DatePipe,
  FirebaseService,
  MessageOrDate,
  RoutineService,
  ROUTER_BINDINGS,
  bind(APP_BASE_HREF).toValue('/src')
 ]);
