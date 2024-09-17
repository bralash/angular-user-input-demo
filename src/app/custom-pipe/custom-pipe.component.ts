import { Component, NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [FormsModule, ReversePipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss',
})

export class CustomPipeComponent {
  text: string = '';
}
