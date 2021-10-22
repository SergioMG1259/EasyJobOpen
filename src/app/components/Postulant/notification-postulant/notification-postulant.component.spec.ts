import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPostulantComponent } from './notification-postulant.component';

describe('NotificationPostulantComponent', () => {
  let component: NotificationPostulantComponent;
  let fixture: ComponentFixture<NotificationPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
