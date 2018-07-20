import { Injectable } from '@angular/core';
import { format, parse } from 'date-fns';
import * as esLocale from 'date-fns/locale/es';

@Injectable()
export class UtilsService {

  public parseDate (date) {
    const year = Number(date.substring(0, 4));
    const month = Number(date.substring(4, 6));
    const day = Number(date.substring(6, 8));
    
    console.log(year, month, day)
    
    const dateFormat = parse(`${year}-${month}-${day}`);
    console.log(dateFormat);
    return format(
      new Date(dateFormat),
      'D [de] MMMM YYYY',
      {locale: esLocale}
    )
  }
    
}