import { Component, OnInit, Output, EventEmitter, OnDestroy, } from '@angular/core';
import { Subscription} from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth : boolean = false;
  authSubscription : Subscription;

  constructor(private authService: AuthService) {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logOut();
  }

  ngOnInit(): void {
   this.authSubscription =  this.authService.authChange.subscribe(authStatus => { 
      this.isAuth = authStatus;
    })  
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}