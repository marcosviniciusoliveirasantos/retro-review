import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota',
})
export class NotaPipe implements PipeTransform {
  transform(value: unknown): string {
    return value + '/10';
  }
}
