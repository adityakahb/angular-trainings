import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'gridsort'
})
export class GridsortPipe implements PipeTransform {

  sortAsc(a, b) {
    if ( a.temp.day < b.temp.day ){
      return -1;
    }
    if ( a.temp.day > b.temp.day ){
      return 1;
    }
    return 0;
  }

  sortDsc(a, b) {
    if ( a.temp.day > b.temp.day ){
      return -1;
    }
    if ( a.temp.day < b.temp.day ){
      return 1;
    }
    return 0;
  }

  transform(value: any[], ...args: unknown[]): unknown {

    if (args[0] === 'asc') {
      return (value || []).sort(this.sortAsc);
    }
    if (args[0] === 'dsc') {
      return (value || []).sort(this.sortDsc);
    }
    return value;
  }

}
