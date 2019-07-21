import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorkPage } from './how-it-work.page';

describe('HowItWorkPage', () => {
  let component: HowItWorkPage;
  let fixture: ComponentFixture<HowItWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
