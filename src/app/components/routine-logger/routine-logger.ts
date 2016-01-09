import {Component, NgFor, NgIf, Input, Output, Directive, FORM_DIRECTIVES} from 'angular2/angular2';
import {Entry, Routine} from '../../models';
import {Database} from '../../services/database-service';
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
  public routine: Routine;
  public entry: Entry;
  
  constructor(params: RouteParams, database: Database) {
    this.id = Number(params.get('id'));
    this.database = database;
    this.routine = database.getRoutineByEntryId(this.id);
    this.entry = this.routine.entries.find(entry => entry.timestamp == this.id);
  }
  
  handleChange(e) {
    this.database.saveRoutine(this.routine);
  }
}