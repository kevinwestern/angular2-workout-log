import {Component, NgFor, NgIf, Input, Output, Directive, FORM_DIRECTIVES} from 'angular2/angular2';
import {Entry, Routine} from '../../models';
import {Database} from '../../services/database-service';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


@Component({
  selector: 'routine-history',
  templateUrl: '/src/app/components/routine-history/routine-history.html',
  directives: [NgFor, ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    :host {
      display: block;
    }
    `]
})
export class RoutineHistory {
  private database: Database;
  public routine: Routine;
  public entry: Entry;
  
  constructor(params: RouteParams, database: Database) {
    this.database = database;
    
  }
  
  handleChange(e) {
    this.database.saveRoutine(this.routine);
  }
}