import { AppComponent } from './app.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Hello world', () => {
  let expected = "";
  let authService: AuthService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AuthService]
    }).compileComponents();

      expected = "Hello World";

      fixture = TestBed.createComponent(AppComponent);

      authService = TestBed.get(AuthService);

      el = fixture.debugElement.query(By.css('a'));
  }));

  afterEach(() => {
    expected = "";

  });

  it('says hello', () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.helloWorld()).toEqual(expected);
  });

  it('canLogin returns false when the user is not authenticated',() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    

    expect(authService.isAuthenticated()).toBeFalsy();
    expect(component.needsLogin()).toBeTruthy();
  });

  it('login button hidden when the user is authenticated', () => {
      expect(el.nativeElement.textContent.trim()).toBe('');
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });


})
