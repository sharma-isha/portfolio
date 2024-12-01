import { Component,HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  updateBackgroundHeight() {
    const bgElement = document.querySelector('.center-image-container') as HTMLElement;
    if (bgElement) {
      bgElement.style.height = `${document.body.scrollHeight}px`;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateBackgroundHeight();
  }

  ngAfterViewInit() {
    this.updateBackgroundHeight();
  }
}
