import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeywordPage } from './add-keyword.page';

describe('AddKeywordPage', () => {
  let component: AddKeywordPage;
  let fixture: ComponentFixture<AddKeywordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKeywordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeywordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
