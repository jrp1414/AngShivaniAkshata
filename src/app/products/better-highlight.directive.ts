import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';


@Directive({
    selector: "[better-highlight]"
})
export class BetterHighlightDirective implements OnInit {

    @Input('better-highlight') defaultColor:string;

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.renderer.setStyle(this.el.nativeElement, "background-color", this.defaultColor);
    }

}