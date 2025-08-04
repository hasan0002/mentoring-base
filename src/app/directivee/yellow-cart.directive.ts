import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[yellow-cart]',
    standalone: true,
})
export class YellowCartDirective{
    private readonly el = inject(ElementRef);

    @HostListener('mouseenter') onMouseEnter(){
        this.el.nativeElement.style.backgroundColor = '#F0BA4E';
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = '';
    }
}