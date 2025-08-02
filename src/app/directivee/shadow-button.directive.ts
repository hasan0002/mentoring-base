import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[shadow-butn]',
    standalone: true,
})

export class ShadowButtonDirective{
    private readonly el = inject(ElementRef);

    @HostListener('mouseenter') onMouseEnter(){
            this.el.nativeElement.style.boxShadow = '0 4px 8px rgba(255, 213, 0, 0.3)';
        }
    
    @HostListener('mouseleave') onMouseLeavr(){
        this.el.nativeElement.style.boxShadow = '';
    }
}