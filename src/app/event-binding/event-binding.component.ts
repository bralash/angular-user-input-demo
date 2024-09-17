import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  lastEvent: string = '';

  onClick(event: MouseEvent) {
    this.lastEvent = `Clicked at: (${event.clientX}, ${event.clientY})`;
  }

  onKeyUp(event: KeyboardEvent) {
    this.lastEvent = `Key pressed: ${event.key}`
  }
}
