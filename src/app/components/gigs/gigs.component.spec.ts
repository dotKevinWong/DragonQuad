/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GigsComponent } from './gigs.component';

describe('GigsComponent', () => {
  let component: GigsComponent;
  let fixture: ComponentFixture<GigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
