import { Injectable } from '@angular/core';
import { S3Client } from '@aws-sdk/client-s3';
import { environment } from "../../environments/environment.development"
@Injectable({
  providedIn: 'root',
})

export class AwsService {
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: environment.AWS_REGION,
      credentials: {
        accessKeyId: environment.AWS_ACCESS_KEY_ID,
        secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  getS3Client() {
    return this.s3;
  }

}
