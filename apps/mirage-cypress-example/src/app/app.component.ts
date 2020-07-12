import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mirage-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mirage-cypress-example';
  users$ = this.httpClient
    .get('/api/users')
    .pipe(map((res: { users: [] }) => res.users));
  constructor(private httpClient: HttpClient) {}
}
