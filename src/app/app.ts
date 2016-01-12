import {Component, bootstrap, NgFor, FORM_DIRECTIVES, Input, bind} from 'angular2/angular2';
import {Routine} from './models';
import {MessageOrDate} from './pipes/messageordate';
import {AppLocalStorage} from './services/database-service';
import {Database} from './services/database-service';
import {RoutineHistory} from './components/routine-history/routine-history';
import {RoutineLogger} from './components/routine-logger/routine-logger';
import {RoutineSnapshot} from './components/routine-snapshot/routine-snapshot';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_BINDINGS, ROUTER_PROVIDERS} from 'angular2/router'


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
  
  public routines: Routine[]
  
  constructor(database: Database) {
    database.getRoutines().then((routines: Routine[]) => this.routines = routines);
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
  { path: '/routine/:id', component: RoutineHistory, as: 'RoutineHistory' },
  { path: '/routine/:id/edit', component: RoutineLogger, as: 'RoutineLogger'},
])
class AppComponent {
  
}
bootstrap(AppComponent, [
  AppLocalStorage,
  Database,
  MessageOrDate,
  ROUTER_BINDINGS,
  ROUTER_PROVIDERS,
  bind(APP_BASE_HREF).toValue('/src')
 ]);
