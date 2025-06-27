import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lkrFormatter'
})
export class LkrFormatterPipe implements PipeTransform {

  transform(value: any, Symbol:string):string {
    return (value.substr(0,3)==='LKR'?value.repalce('LKR',Symbol):value)
  }
  }


