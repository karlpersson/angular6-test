import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHoverFocusComponent } from './test-hover-focus.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from '../hover-focus.directive';

describe('TestHoverFocusComponent', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHoverFocusComponent, HoverFocusDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');
    inputEl.triggerEventHandler('mouseout',null);
    fixture.detectChanges();
    console.log(inputEl.nativeElement.style.backgroundColor);
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
