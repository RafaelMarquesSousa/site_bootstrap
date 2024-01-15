import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponentComponent } from "./components/primeiro-component/primeiro-component.component";

import { SegundoComponentComponent } from "./components/segundo-component/segundo-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PrimeiroComponentComponent, SegundoComponentComponent,]
})
export class AppComponent {
  title = 'bootstrap';
}
