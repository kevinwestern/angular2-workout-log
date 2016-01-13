import {Inject, Pipe} from 'angular2/core';

@Pipe({name: 'messageOrDate'})
export class MessageOrDate {
 
  transform(value: number, args:string[]): String {
    if (value) {
      const now = moment();
      const diff = now.diff(value, 'days');
      if (diff) {
        return `${diff} days ago`;
      }
      const minutes = now.diff(value, 'minutes');
      if (minutes > 60) {
        return now.diff(value, 'hours') + ' hours ago';
      } else if (minutes) {
        return `${minutes} minutes ago`;
      } else {
        return now.diff(value, 'seconds') + ' seconds ago';
      }
    }
    return args[0];
  }
}
