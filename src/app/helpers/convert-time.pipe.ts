import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(seconds: number, ...args: unknown[]): unknown {
    let minutes = ~~(seconds / 60);
    let extraSeconds = seconds % 60;
    return `${minutes}:${extraSeconds}`;
  }

}
