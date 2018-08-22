import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing';

describe('Hello world', () => {
  let expected = "";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

      expected = "Hello World";
  }));

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.helloWorld()).toEqual(expected);
  });


})
