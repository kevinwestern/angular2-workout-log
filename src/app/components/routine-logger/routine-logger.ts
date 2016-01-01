import {Component, NgFor, NgIf, Input, Output, Directive, FORM_DIRECTIVES} from 'angular2/angular2';
import {Lift} from '../../models/lift';
import {Routine} from '../../models/routine';
import {RoutineEntry} from '../../models/routine-entry';
import {FirebaseService} from '../../services/firebase-service';
import {RoutineService} from '../../services/routine-service';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


@Component({
  selector: 'routine-logger',
  templateUrl: '/src/app/components/routine-logger/routine-logger.html',
  directives: [NgFor, NgIf, ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    :host {
      display: block;
    }
    
    .lift {
      font-size: 18px;
    }
    
    .short-input {
      width: 50px;
      border: none;
      margin-left: .5em;
    }
    
    .lift-set {
      line-height: 2em;
    }
    
    .sets {
      opacity: 1;
      transition: opacity .2s, transform .2s;
    }
    
    .collapsed {
      opacity: 0;
      transform: translateY(-100px);
    }
    `]
})
export class RoutineLogger {
  private firebase: FirebaseService;
  public routineEntry: RoutineEntry;
  
  constructor(params: RouteParams, routineService: RoutineService, firebase: FirebaseService) {
    const id = params.get('id');
    this.firebase = firebase;
    this.firebase.getRoutineEntry(id).then((re) => this.routineEntry = re)
  }
  
  handleChange(e) {
    this.firebase.saveRoutineEntry(this.routineEntry)
  }
}