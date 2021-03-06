import { AppComponent } from './app.component';
import { TestBed, async, ComponentFixture, fakeAsync,tick,inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

import { TestHoverFocusComponent } from './test-hover-focus/test-hover-focus.component';

class MockAuthService extends AuthService{
  isAuthenticated(){
    return Promise.resolve(true);
  }
}



describe('Hello world', () => {
  let expected = "";
  let authService: AuthService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,TestHoverFocusComponent],
      providers: [AuthService]
    }).compileComponents();

    TestBed.overrideComponent(
      AppComponent,
      {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}});

      expected = "Hello World";

      fixture = TestBed.createComponent(AppComponent);

      authService = TestBed.get(AuthService);

      component = fixture.componentInstance;

      el = fixture.debugElement.query(By.css('a'));
  }));

  afterEach(() => {
    expected = "";

  });

  it('says hello', () => {
    const app = fixture.debugElement.componentInstance;

    expect(app.helloWorld()).toEqual(expected);
  });

  xit('canLogin returns false when the user is not authenticated',async(() => {
    /*expect(component.needsLogin()).toBeTruthy();*/
  }));

  xit('login button hidden when the user is authenticated', () => {
      expect(el.nativeElement.textContent.trim()).toBe('');
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      spyOn(authService, 'isAuthenticated').and.returnValue(true);
      expect(el.nativeElement.textContent.trim()).toBe('Login');
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

  it('Button label via async() and whenStable()', async(() => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    })
    component.ngOnInit();
  }));

  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');

  }))

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([AuthService], (injectService: AuthService) => {
      expect(injectService).toBe(authService);
    })
);


})
