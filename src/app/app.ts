import {Component, bootstrap, Injectable, Inject, NgFor, FORM_DIRECTIVES, Input} from 'angular2/angular2';
import {ROUTINES} from './mocks/routines';
import {Routine} from './models/routine';
import {WorkoutRoutine} from './components/workout-routine/workout-routine';

@Injectable()
class RoutineService {
  private routines: Routine[];
  
  constructor() {
      this.routines = ROUTINES;
  }
  
  getRoutines() {
      return this.routines;
  }
}

@Component({
  selector: 'my-app',
  template: `
      <div class="app-content">
          <workout-routine *ng-for="#routine of routines" [routine]="routine"></workout-routine>
      </div>
  `,
  directives: [WorkoutRoutine, NgFor, FORM_DIRECTIVES],
})
class AppComponent {
  private routineService: RoutineService;
  
  public routines: Routine[]
  
  constructor(routineService: RoutineService) {
      this.routineService = routineService;
      this.routines = this.routineService.getRoutines();
  }
}
bootstrap(AppComponent, [RoutineService]);
