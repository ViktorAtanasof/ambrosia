import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  burgerMenu = document.querySelector('.hamburger');
  navMenu = document.querySelector('ul');

  constructor(public authService: AuthService) { }

  onClickHamburgerMenu(): void {
    this.burgerMenu?.classList.toggle('active');
    this.navMenu?.classList.toggle('active');
  }
}
