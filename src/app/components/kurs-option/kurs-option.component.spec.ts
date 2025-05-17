import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursOptionComponent } from './kurs-option.component';

describe('KursOptionComponent', () => {
  let component: KursOptionComponent;
  let fixture: ComponentFixture<KursOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KursOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KursOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
