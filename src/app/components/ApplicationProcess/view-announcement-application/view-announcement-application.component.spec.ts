import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnouncementApplicationComponent } from './view-announcement-application.component';

describe('ViewAnnouncementApplicationComponent', () => {
  let component: ViewAnnouncementApplicationComponent;
  let fixture: ComponentFixture<ViewAnnouncementApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnouncementApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnouncementApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
