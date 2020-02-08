import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText:string,propName:string): any {
    if (filterText.length>1) {
        return value.filter(
          (val)=>{
            return (<string>val[propName]).toLowerCase()
            .indexOf(filterText.toLowerCase()) !=-1
          });
    }
    return value;
  }

}

