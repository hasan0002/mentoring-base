import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sliceTextPipe',
    standalone: true,
})

export class SliceTextPipe implements PipeTransform{
    transform(text: string) {
        return text.length > 20 ? text.slice(0, 20) + "..." : text;
    }
 }