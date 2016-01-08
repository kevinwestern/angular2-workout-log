import {Component, NgFor, NgIf, Input, Output, Directive, FORM_DIRECTIVES} from 'angular2/angular2';
import {Lift} from '../../models/lift';
import {Routine} from '../../models/routine';
import {RoutineEntry} from '../../models/routine-entry';
import {Database} from '../../services/database-service';
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
      border-bottom: solid 1px #ccc;
      margin-left: .5em;
    }
    
    .short-input:focus {
      border-bottom-color: #1976D2;
      outline-width: 0;
    }
    
    .lift-set {
      line-height: 2em;
    }  
    `]
})
export class RoutineLogger {
  private database: Database;
  private id: number;
  public routineEntry: RoutineEntry;
  
  constructor(params: RouteParams, routineService: RoutineService, database: Database) {
    this.id = Number(params.get('id'));
    this.database = database;
    this.database.getRoutineEntry(this.id).then((re) => {
      this.routineEntry = re;
    });
  }
  
  handleChange(e) {
    this.database.saveRoutineEntry(this.routineEntry, this.id);
  }
}