import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  submittedData: any;

  onSubmit(formData: any) {
    this.submittedData = formData;
  }
}
