import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lamp',
  imports: [],
  templateUrl: './lamp.html',
  styleUrl: './lamp.css',
})
export class Lamp {
  brightness = signal(50);

  updateBrightness(event: Event) {}
}
