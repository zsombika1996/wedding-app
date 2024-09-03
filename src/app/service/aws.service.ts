import { Injectable } from '@angular/core';
import { S3Client } from '@aws-sdk/client-s3';

@Injectable({
  providedIn: 'root',
})

export class AwsService {
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: process.env.region,
      credentials: {
        accessKeyId: process.env.Access_key_Id,
        secretAccessKey: process.env.secret_key_id,
      },
    });
  }

  getS3Client() {
    return this.s3;
  }

}
