import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'valDecPipe'
})
export class ValDecPipePipe extends DecimalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
      let result;
      result = super.transform(value, "1.2-2");
      return result;
  }

}
