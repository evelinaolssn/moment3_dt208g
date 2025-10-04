import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainnavComponent } from './partials/mainnav/mainnav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainnavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('moment3_dt208g');
}

