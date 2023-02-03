import { Component, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  hamClick: boolean | undefined;

  constructor(public authService: AuthService, private renderer: Renderer2) { }

  onClickHamburgerMenu(): void {
    this.hamClick = !this.hamClick;
    /* this.burgerMenu?.classList.toggle('active');
    this.navMenu?.classList.toggle('active'); */
  }
}
