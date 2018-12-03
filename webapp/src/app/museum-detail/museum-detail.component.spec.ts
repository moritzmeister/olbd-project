import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumDetailComponent } from './museum-detail.component';

describe('MuseumDetailComponent', () => {
  let component: MuseumDetailComponent;
  let fixture: ComponentFixture<MuseumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
