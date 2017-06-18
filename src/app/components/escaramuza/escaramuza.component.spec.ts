/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EscaramuzaComponent } from './escaramuza.component';

describe('EscaramuzaComponent', () => {
  let component: EscaramuzaComponent;
  let fixture: ComponentFixture<EscaramuzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaramuzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaramuzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
