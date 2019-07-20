import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordPage } from './keyword.page';

describe('KeywordPage', () => {
  let component: KeywordPage;
  let fixture: ComponentFixture<KeywordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
