/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditGigComponent } from './edit-gig.component';

describe('EditGigComponent', () => {
  let component: EditGigComponent;
  let fixture: ComponentFixture<EditGigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
