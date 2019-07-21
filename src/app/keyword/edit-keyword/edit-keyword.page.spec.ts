import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKeywordPage } from './edit-keyword.page';

describe('EditKeywordPage', () => {
  let component: EditKeywordPage;
  let fixture: ComponentFixture<EditKeywordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKeywordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKeywordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
