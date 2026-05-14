import { Component, signal } from '@angular/core';
import { TrafficSignal } from './traffic-signal/traffic-signal';

@Component({
  selector: 'app-root',
  imports: [TrafficSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Mini_Projects');
}
