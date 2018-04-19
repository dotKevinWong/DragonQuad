/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddGigComponent } from './add-gig.component';

describe('AddGigComponent', () => {
  let component: AddGigComponent;
  let fixture: ComponentFixture<AddGigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
