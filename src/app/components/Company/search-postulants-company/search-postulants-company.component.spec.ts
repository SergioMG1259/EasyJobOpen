import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostulantsCompanyComponent } from './search-postulants-company.component';

describe('SearchPostulantsCompanyComponent', () => {
  let component: SearchPostulantsCompanyComponent;
  let fixture: ComponentFixture<SearchPostulantsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostulantsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostulantsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
