import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss',
})
export class FormArrayComponent implements OnInit {
  form!: FormGroup;
  submittedItems: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });
    this.addItem();
  }

  addItem() {
    this.itemsFormArray.push(this.fb.control('', Validators.required));
  }

  get itemsFormArray() {
    return this.form.get('items') as FormArray;
  }

  removeItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedItems = this.itemsFormArray.value;
    }
  }
}
