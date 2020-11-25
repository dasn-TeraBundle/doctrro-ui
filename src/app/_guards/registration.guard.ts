import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../_services/user.service';
import {Store} from '@ngrx/store';
import {login} from '../store/user.action';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {

  constructor(private router: Router,
              private store: Store,
              private userService: UserService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.getUser()
      .toPromise()
      .then(user => {
        this.store.dispatch(login({user}));
        return Promise.resolve(true);
      }).catch(err => {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return Promise.resolve(false);
      });

  }

}
