import { Component, ContentChild, ElementRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-view-content-child',
  standalone: true,
  imports: [],
  templateUrl: './view-content-child.component.html',
  styleUrl: './view-content-child.component.scss'
})
export class ViewContentChildComponent {
  @ViewChild('viewChildInput') viewChildInput!: ElementRef;
  @ContentChild('contentChildInput') contentChildInput!: ElementRef;

  ngAfterViewInit() {
    console.log('ViewChild:', this.viewChildInput);
  }

  ngAfterContentInit() {
    console.log('ContentChild:', this.contentChildInput);
  }

  focusViewChildInput() {
    this.viewChildInput.nativeElement.focus();
  }

  focusContentChildInput() {
    this.contentChildInput.nativeElement.focus();
  }
}
