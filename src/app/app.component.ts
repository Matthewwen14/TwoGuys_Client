import { Component } from '@angular/core';
import { AuthService } from './auth0/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'two-guys-client';

  constructor(public auth: AuthService) {}
}
