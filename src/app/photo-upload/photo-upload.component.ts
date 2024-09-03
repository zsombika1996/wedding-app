import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileService } from '../service/file.service';
import { CustomFileInputComponent } from '../custom-file-input/custom-file-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-upload',
  standalone: true,
  imports: [HttpClientModule, CustomFileInputComponent, CommonModule],
  providers: [FileService],
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class UploadComponent {


  constructor(private fileService: FileService) { }

  onFileSelected(file: File) {
    if (file) {
      const now = new Date();
      const timestamp = now.toISOString().replace(/[:.-]/g, '');
      const newFileName = `${timestamp}_${file.name}`;
      
      const newFile = new File([file], newFileName, { type: file.type });
  
      this.fileService.uploadFile(newFile)
        .then(response => {
          console.log('Upload success:', response);
        })
        .catch(error => {
          console.error('Upload error:', error);
        });
    }
  }
  
}
