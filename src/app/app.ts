import { Component, signal } from '@angular/core';
import { Lamp } from './pages/lamp/lamp';

@Component({
  selector: 'app-root',
  imports: [Lamp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('int-lamp');
}
