/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditHousingComponent } from './edit-housing.component';

describe('EditHousingComponent', () => {
  let component: EditHousingComponent;
  let fixture: ComponentFixture<EditHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
