import {DatePipe} from 'angular2/angular2';
import {Inject, Pipe} from 'angular2/core';

@Pipe({name: 'messageOrDate'})
export class MessageOrDate {
 
  constructor(private datePipe: DatePipe) {}
  transform(value: number, args:string[]): String {
    if (value) {

      return this.datePipe.transform(value, args.slice(1));
    }
    return args[0];
  }
}
