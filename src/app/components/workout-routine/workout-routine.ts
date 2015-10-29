import {Component, NgFor, Input} from 'angular2/angular2';
import {Routine} from '../../models/Routine';
import {ViewEncapsulation} from 'angular2/angular2';

@Component({
  selector: 'workout-routine',
  templateUrl: 'app/components/workout-routine/workout-routine.ng.html',
  directives: [NgFor],
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['app/components/workout-routine/workout-routine.css']
})
export class WorkoutRoutine {
  @Input()
  routine: Routine;
  
  startRoutine(routine: Routine): void {
    console.log(routine);
  }
}