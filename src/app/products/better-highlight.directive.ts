import { Directive, ElementRef, OnInit, Renderer2, Input, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector: "[better-highlight]"
})
export class BetterHighlightDirective implements OnInit {

    @Input('better-highlight') defaultColor:string;
    @Input('highlight') highlightColor:string;

    @HostBinding("style.backgroundColor") backgroundColor:string;

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        //this.renderer.setStyle(this.el.nativeElement, "background-color", this.defaultColor);
        this.backgroundColor = this.defaultColor;
    }

    @HostListener("mouseenter") OnMouseEnter(){
        this.backgroundColor = this.highlightColor;
    }
    
    @HostListener("mouseleave") OnMouseLeave(){
        this.backgroundColor = this.defaultColor;
    }

    @HostListener("click") OnClick(){
        alert("Clicked");
    }
}