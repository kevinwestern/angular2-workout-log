import {Component, NgFor, Input, Output, Pipe, Directive, ElementRef} from 'angular2/angular2';
import {Lift} from '../../models/lift';
import {Routine} from '../../models/routine';
import {RoutineService} from '../../services/routine-service';
import {ViewEncapsulation} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';


/**
 * Creates a numeric array of a given length with default values
 * of index+1.
 */
@Pipe({
  name: 'range'
})
class RangePipe {
  transform(value: number): number[] {
    let arr:number[] = [];
    for (let i:number = 0; i < value; i++) {
      arr.push(i + 1);
    }
    return arr;
  }
}


@Directive({
  selector: '[collapsable-item]',
  host: {
    '(click)': 'toggleCollapse()'
  }
})
class CollapsableItem {
  isCollapsed: boolean;
  element: ElementRef;
  
  constructor(element: ElementRef) {
    this.element = element;
    this.isCollapsed = element.nativeElement.classList.contains('collapsed');
  }
 
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.element.nativeElement.classList.toggle('collapsed');
  }
}

@Component({
  selector: 'routine-logger',
  templateUrl: '/src/app/components/routine-logger/routine-logger.html',
  directives: [NgFor, ROUTER_DIRECTIVES, CollapsableItem],
  pipes: [RangePipe],
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
  routine: Routine;
  
  constructor(params: RouteParams, routineService: RoutineService) {
    let id = parseInt(params.get('id'), 10);
    this.routine = routineService.get(id);    
  }
  
  getMaxRepsForSet(lift: Lift, set: number): number {
    return 6;
  }
  
  getWeightForSet(lift: Lift, set:number): number {
    return 300;
  }
}