import { Component, signal } from '@angular/core';
import { ChatUi } from './chat-ui/chat-ui';

@Component({
  selector: 'app-root',
  imports: [ChatUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Mini_Projects');
}
