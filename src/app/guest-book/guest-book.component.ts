import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadComponent } from "../photo-upload/photo-upload.component";
import { FileService } from '../service/file.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-book',
  standalone: true,
  imports: [HttpClientModule, UploadComponent, CommonModule],
  providers: [FileService],
  templateUrl: './guest-book.component.html',
  styleUrl: './guest-book.component.css'
})
export class GuestBookComponent implements OnInit {
  imageUrls: any[] = [];

  constructor(private fileService: FileService) { }

  async ngOnInit() {
    this.imageUrls = await this.fileService.listImages();
  }

  

}
