import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase'
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return 'My: ' + value.toUpperCase();
  }

}
