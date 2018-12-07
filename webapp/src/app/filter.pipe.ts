import { Pipe, PipeTransform } from '@angular/core';
import { Museum } from './museum';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Museum[], searchText: string): Museum[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.name.toLowerCase().includes(searchText);
        });
    }
}
