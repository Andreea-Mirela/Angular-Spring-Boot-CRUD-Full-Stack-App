import { Injectable } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oktaAuthService: OktaAuthStateService) { }

  isAuthenticated(): Observable<boolean> {
    return this.oktaAuthService.authState$.pipe(
      filter((authState) => !!authState.isAuthenticated),
      map((authState) => authState.isAuthenticated!)
    );
  }

}

