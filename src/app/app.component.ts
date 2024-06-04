import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureProfileComponent } from './components/profile/picture-profile/picture-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PictureProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geraldo-flix';
}
