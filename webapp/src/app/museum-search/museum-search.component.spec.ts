import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumSearchComponent } from './museum-search.component';

describe('MuseumSearchComponent', () => {
  let component: MuseumSearchComponent;
  let fixture: ComponentFixture<MuseumSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
