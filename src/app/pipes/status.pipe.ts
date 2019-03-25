import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==0){
      return "Out of Stock";
    }
    else{
      return "In Stock";
    }
  }

}
