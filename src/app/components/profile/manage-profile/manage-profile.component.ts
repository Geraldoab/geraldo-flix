import { Component } from '@angular/core';
import { PictureProfileComponent } from '../picture-profile/picture-profile.component';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [PictureProfileComponent],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.css'
})
export class ManageProfileComponent {

}
