import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Jon Doe';
  userData = {
    name: 'Bill Gates',
    role: 'Developer',
  };
  title = 'moments';
}
