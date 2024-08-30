import { Component } from '@angular/core';
import { UploadComponent } from "../photo-upload/photo-upload.component";
import { ProgramComponent } from '../program/program.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [UploadComponent, ProgramComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
