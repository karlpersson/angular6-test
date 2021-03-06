import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  afterEach(() => { 
    localStorage.removeItem('token');
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should return true from isAuthenticated when there is a token', 
      inject([AuthService], (service: AuthService) => {
      localStorage.setItem('token', '1234');
      service.isAuthenticated().then(p => {expect(p).toBeTruthy();})}))

  it('should return false from isAuthenticated when there is no token', 
    inject([AuthService], (service: AuthService) => {
      service.isAuthenticated().then(p => {    
        expect(p).toBeFalsy();})
  }));
});

