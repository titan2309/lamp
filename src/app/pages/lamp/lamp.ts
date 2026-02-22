import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-lamp',
  imports: [],
  templateUrl: './lamp.html',
  styleUrl: './lamp.css',
})
export class Lamp {
  brightness = signal(30);

  updateBrightness(event: Event) {
    const input = event.target as HTMLInputElement;
    this.brightness.set(+input.value);
  }
}
