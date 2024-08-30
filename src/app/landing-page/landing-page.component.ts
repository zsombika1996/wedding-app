import { Component } from '@angular/core';
import { UploadComponent } from "../photo-upload/photo-upload.component";
import { ProgramComponent } from '../program/program.component';
import { NavigationComponent } from "../navigation/navigation.component";
import { CountdownComponent } from "../countdown/countdown.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [UploadComponent, ProgramComponent, NavigationComponent, CountdownComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
