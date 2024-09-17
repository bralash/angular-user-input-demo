import { Component } from '@angular/core';
import { ChildComponent } from "./child.component";

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {
  data: number = 0;
  obj = { value: 0 };

  updateData() {
    this.data++;
  }

  updateObject() {
    this.obj = { value: this.obj.value + 1 }
  }
}
