import { Component } from '@angular/core';

@Component({
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Bands';
  hero = 'Windstorm';
}
