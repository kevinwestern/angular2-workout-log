import {Inject, Pipe} from 'angular2/core';

@Pipe({name: 'messageOrDate'})
export class MessageOrDate {
 
  transform(value: number, args:string[]): String {
    if (value) {
      const diff = moment().diff(value, 'days');
      return diff ? ' days ago' : 'Recorded today.';
    }
    return args[0];
  }
}
