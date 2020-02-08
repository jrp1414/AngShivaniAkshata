import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplaceCharPipe implements PipeTransform {

  transform(value: string, fromChar:string[],toChar:string[]): any {
    let result = value;
    if (fromChar.length == toChar.length) {
      for (let i in fromChar) {
        result = result.replace(fromChar[i],toChar[i]);
      }
    }
    return result;
  }

}
