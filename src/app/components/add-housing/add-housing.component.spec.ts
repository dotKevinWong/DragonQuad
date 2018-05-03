/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddHousingComponent } from './add-housing.component';

describe('AddHousingComponent', () => {
  let component: AddHousingComponent;
  let fixture: ComponentFixture<AddHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
