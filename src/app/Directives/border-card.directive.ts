import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[pokemonBorderCard]"
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder("#f5f5f5");
    this.setHeight(180);
  }

  private setBorder(color: string) {
    let border = `solid 4px ${color}`;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.height = `${height}px`;
  }
}
