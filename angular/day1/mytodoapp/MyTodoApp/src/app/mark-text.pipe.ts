import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markText'
})
export class MarkTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replaceAll(String(args[0]), '<mark>' + args[0] + '</mark>');
  }

}
