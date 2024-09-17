import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-operations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-operations.component.html',
  styleUrl: './async-operations.component.scss',
})
export class AsyncOperationsComponent {
  data$: Observable<string> | null = null;

  loadData() {
    this.data$ = of('Async data loaded').pipe(delay(1000));
  }
}
