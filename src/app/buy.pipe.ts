import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buy'
})
export class BuyPipe implements PipeTransform {

  transform(text: string): string {
    return text.split(' ').slice(0,2).join(" ");
  }

}
