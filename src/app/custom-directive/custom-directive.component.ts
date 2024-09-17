import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss',
})
export class CustomDirectiveComponent {}
