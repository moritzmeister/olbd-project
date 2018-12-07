import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumQuarterComponent } from './museum-quarter.component';

describe('MuseumQuarterComponent', () => {
  let component: MuseumQuarterComponent;
  let fixture: ComponentFixture<MuseumQuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumQuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
