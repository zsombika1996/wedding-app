import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadComponent } from "../photo-upload/photo-upload.component";
import { UploadService } from '../service/google-drive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-book',
  standalone: true,
  imports: [HttpClientModule,UploadComponent,CommonModule],
  providers:[UploadService],
  templateUrl: './guest-book.component.html',
  styleUrl: './guest-book.component.css'
})
export class GuestBookComponent implements OnInit {
  photos: any[] = [];

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.loadPhotos()
  }

  loadPhotos(): void {
    this.uploadService.loadPhotos().subscribe(
      data => {
        this.photos = data;
        this.photos.forEach(photo => {
          console.log(photo.webViewLink)
        });
        console.log(this.photos)
      },
      error => {
        console.error('Error loading photos', error);
      }
    );
  }
}
