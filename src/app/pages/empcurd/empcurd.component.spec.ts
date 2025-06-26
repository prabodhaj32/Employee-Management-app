import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcurdComponent } from './empcurd.component';

describe('EmpcurdComponent', () => {
  let component: EmpcurdComponent;
  let fixture: ComponentFixture<EmpcurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpcurdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpcurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
