import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimLength'
})
export class TrimLengthPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.substring(0, 120);
  }

}
