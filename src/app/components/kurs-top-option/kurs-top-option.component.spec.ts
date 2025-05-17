import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursTopOptionComponent } from './kurs-top-option.component';

describe('KursTopOptionComponent', () => {
  let component: KursTopOptionComponent;
  let fixture: ComponentFixture<KursTopOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KursTopOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KursTopOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
