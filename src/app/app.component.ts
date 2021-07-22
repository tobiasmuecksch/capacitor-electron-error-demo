import { Component } from '@angular/core';
import { app } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    console.log(app.getBadgeCount());
  }
}
