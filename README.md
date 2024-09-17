# Angular User Input Demo

## Project Overview

This Angular project serves as a comprehensive demonstration of best practices for handling user input in Angular applications. It provides practical examples on "Best Practices for Handling User Input in Angular Templates and Components".

## Features

The project includes various components and modules that showcase different aspects of user input handling in Angular:

1. **Basic Form Handling**
   - Template-driven forms example
   - Reactive forms example

2. **Event Binding**
   - Demonstration of `(click)`, `(input)`, and other event bindings

3. **Input and Output Properties**
   - Parent-child component communication using `@Input()` and `@Output()`

4. **ViewChild and ContentChild**
   - Using `@ViewChild` to access an element within the component's template, and `@ContentChild` to access content projected into the component.

5. **Custom Pipe**
   - Example of a custom `ReversePipe` that reverses the input string.

6. **Custom Directives**
   - Includes a custom `HighlightDirective` that changes the background color of an element when hovered over.

7. **Change Detection**
   - Optimizing performance with change detection strategies

8. **Async Operations**
   - Handling user input with observables and async pipes

7. **Form Array**
   - Managing collections of form

8. **Error Handling**
    - Comprehensive error handling and user feedback

9. **Accessibility Features**
   - ARIA attributes and keyboard navigation examples

10. **Security Considerations**
   - Input sanitization and protection against XSS attacks



## Project Structure

```
src/
├── app/
│   │── accessibility/
│   │── async-operations/
│   │── change-detection/
│   │── custom-directive/
│   │── custom-pipe/
│   │── error-handling/
│   │── event-binding/
│   │── form-array/
|   |── input-output/
|   |── reactive-form/
|   |── security/
|   |── template-driven-form/
|   |── view-content-child/
│   └── app.component.ts
├── assets/
└── index.html
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/bralash/angular-user-input-demo.git
   ```

2. Navigate to the project directory:
   ```
   cd angular-user-input-demo
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

## Component Descriptions

### Template-Driven Form Component
Demonstrates the use of Angular's template-driven forms, including:
- Two-way data binding with `[(ngModel)]`
- Form validation using template variables
- Displaying validation messages

### Reactive Form Component
Showcases Angular's reactive forms, including:
- FormBuilder usage
- Custom validators
- Dynamic form control addition/removal

### Event Binding Demo Component
Illustrates various event bindings such as:
- Click events
- Input events
- Custom events

### Input/Output Demo Component
Demonstrates parent-child component communication using:
- `@Input()` decorators for data passing
- `@Output()` decorators with EventEmitter for child-to-parent communication


## Contributing

Contributions to improve the project or add new examples are welcome. Please submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License