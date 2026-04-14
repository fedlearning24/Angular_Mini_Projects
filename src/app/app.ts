import { Component, signal } from '@angular/core';
import { Votes } from './votes/votes';

@Component({
  selector: 'app-root',
  imports: [Votes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Mini_Projects');
}
