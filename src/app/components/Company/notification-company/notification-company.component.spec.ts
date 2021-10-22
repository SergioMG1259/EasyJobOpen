import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCompanyComponent } from './notification-company.component';

describe('NotificationCompanyComponent', () => {
  let component: NotificationCompanyComponent;
  let fixture: ComponentFixture<NotificationCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
