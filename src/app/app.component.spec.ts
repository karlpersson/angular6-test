import { AppComponent } from './app.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Hello world', () => {
  let expected = "";
  let authService: AuthService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AuthService]
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

  it('canLogin returns false when the user is not authenticated',() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    authService = TestBed.get(AuthService);
    expect(authService.isAuthenticated()).toBeFalsy();
    expect(component.needsLogin()).toBeTruthy();
  });


})
