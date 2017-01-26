import { Pipe, PipeTransform, NgZone } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'bdTimeAgo',
  pure: false
})
export class BdTimeAgoPipe implements PipeTransform {

  value: Date;

  constructor(private ngZone: NgZone) { }

  transform(value: Date): string {
    let result: string;

    if (this.isToday(value)) {
      result = moment(value).fromNow() + ', at ' + moment(value).format('HH:mm');
    } else if (this.isYesterday(value)) {
      result = 'Yesterday at ' + moment(value).format('HH:mm');
    } else {
      result = moment().format('MMM D YYYY');
    }

    return result;
  }

  isToday(val: Date): boolean {
    return moment(val).isSame(moment().clone().startOf('day'), 'd');
  }

  isYesterday(val: Date): boolean {
    return moment(val).isSame(moment().clone().subtract(1, 'days').startOf('day'), 'd');
  }

}