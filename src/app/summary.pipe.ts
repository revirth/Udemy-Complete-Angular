import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number, postfix?: string) {
        if(!value) return null;
        
        return value.substr(0, limit ? limit : 50) + (postfix ? postfix : '...');
    }
}

