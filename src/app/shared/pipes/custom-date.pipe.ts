import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date): Date | number | string {
    return value.toLocaleString('default', {
      day: 'numeric',
      weekday: "long",
      month: "long",
      year: 'numeric',
    })
  }

}
