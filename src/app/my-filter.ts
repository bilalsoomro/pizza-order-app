import { Pipe, PipeTransform } from '@angular/core';
import {Pizza} from './pizza';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(menu: any, filter: string): any {
        if (!menu || !filter) {
            return menu;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return menu.filter(m => m.item.ingredients.indexOf(filter) !== -1);
    }
}