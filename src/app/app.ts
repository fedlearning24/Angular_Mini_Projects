import { Component, signal } from '@angular/core';
import { Github } from './github/github';

@Component({
  selector: 'app-root',
  imports: [Github],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Mini_Projects');
}
