import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}
  canLoad() {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }
  canActivate() {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }
}
