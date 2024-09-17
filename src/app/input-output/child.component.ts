import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <p>{{ message }}</p>
    <button (click)="sendReply()">Reply to Parent</button>
  `,
  standalone: true,
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() reply = new EventEmitter<string>();

  sendReply() {
    this.reply.emit('Hello from child!');
  }
}
