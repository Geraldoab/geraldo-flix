import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureProfileComponent } from './components/profile/picture-profile/picture-profile.component';
import { ManageProfileComponent } from './components/profile/manage-profile/manage-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PictureProfileComponent, ManageProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geraldo-flix';
}
