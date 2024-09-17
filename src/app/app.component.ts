import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AsyncOperationsComponent } from './async-operations/async-operations.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { SecurityComponent } from './security/security.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    EventBindingComponent,
    InputOutputComponent,
    ViewContentChildComponent,
    CustomPipeComponent,
    CustomDirectiveComponent,
    ChangeDetectionComponent,
    AsyncOperationsComponent,
    FormArrayComponent,
    ErrorHandlingComponent,
    AccessibilityComponent,
    SecurityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-user-input-demo';
}
