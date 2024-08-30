import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private uploadUrl = 'https://europe-west1-adel-zsombor-wedding.cloudfunctions.net/uploadToDrive';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const reader = new FileReader();
    return new Observable(observer => {
      reader.onloadend = () => {
        // Convert the file to Base64
        const base64data = reader.result as string;
        const base64File = base64data.split(',')[1]; // Get the Base64 string

        // Create the payload
        const payload = {
          fileName: file.name,
          mimeType: file.type,
          file: base64File
        };

        // Send the POST request to the Cloud Function
        this.http.post(this.uploadUrl, payload).subscribe(
          response => {
            observer.next(response);
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
      };

      reader.readAsDataURL(file); // Read the file as Base64
    });
  }
}
