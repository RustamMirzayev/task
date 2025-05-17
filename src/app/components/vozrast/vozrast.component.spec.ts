import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VozrastComponent } from './vozrast.component';

describe('VozrastComponent', () => {
  let component: VozrastComponent;
  let fixture: ComponentFixture<VozrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VozrastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VozrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
