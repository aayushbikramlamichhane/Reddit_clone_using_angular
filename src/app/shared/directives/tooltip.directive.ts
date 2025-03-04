import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[aayushTooltip]',
})
export class TooltipDirective {
  @Input('aayushTooltip') tooltipText!: string;
  private tooltipElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('span');
      this.renderer.addClass(this.tooltipElement, 'tooltiptext');
      this.renderer.setProperty(
        this.tooltipElement,
        'innerText',
        this.tooltipText
      );
      this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    }
    this.renderer.setStyle(this.tooltipElement, 'display', 'block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'display', 'none');
    }
  }
}
