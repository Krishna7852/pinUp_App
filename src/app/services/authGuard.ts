import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from './auth-service.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
}
