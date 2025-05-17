import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtivePeriotComponent } from './avtive-periot.component';

describe('AvtivePeriotComponent', () => {
  let component: AvtivePeriotComponent;
  let fixture: ComponentFixture<AvtivePeriotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvtivePeriotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvtivePeriotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
