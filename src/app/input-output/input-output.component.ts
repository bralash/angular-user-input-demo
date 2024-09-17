import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  parentMessage = 'Hello from parent!';
  childReply = '';

  onReply(message: string) {
    this.childReply = message;
  }
}
