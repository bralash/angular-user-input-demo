import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncOperationsComponent } from './async-operations.component';

describe('AsyncOperationsComponent', () => {
  let component: AsyncOperationsComponent;
  let fixture: ComponentFixture<AsyncOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
