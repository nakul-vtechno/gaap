import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKeywordPage } from './detail-keyword.page';

describe('DetailKeywordPage', () => {
  let component: DetailKeywordPage;
  let fixture: ComponentFixture<DetailKeywordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKeywordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKeywordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
