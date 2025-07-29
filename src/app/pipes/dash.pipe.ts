import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dashPipe',
    standalone: true,
})

export class DashPipe implements PipeTransform{
    transform(textWithDash: string) {
        return textWithDash.replace(/[^0-9]/g, "");
    }
;
}

