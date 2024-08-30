import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { CustomFileInputComponent } from '../custom-file-input/custom-file-input.component';

@Component({
  selector: 'app-photo-upload',
  standalone: true,
  imports: [HttpClientModule,CustomFileInputComponent],
  providers: [UploadService],
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class UploadComponent {

  constructor(private uploadService: UploadService) { }

  onFileSelected(file: File) {
    if (file) {
      this.uploadService.uploadFile(file).subscribe(
        response => {
          console.log('File uploaded successfully', response);
        },
        error => {
          console.error('Error uploading file', error);
        }
      );
    }
  }
}
