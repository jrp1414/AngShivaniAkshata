import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {


    // private element: ElementRef;
    // constructor(el: ElementRef) {
    //     this.element = el;
    // }

    // constructor(private el: ElementRef) {

    // }

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        // this.el.nativeElement.style.backgroundColor = "yellow";
        this.renderer.setStyle(this.el.nativeElement, "background-color", "yellowgreen");
    }

}