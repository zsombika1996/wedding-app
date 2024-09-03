import { Injectable } from '@angular/core';
import { S3Client } from '@aws-sdk/client-s3';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root',
})

export class AwsService {
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: environment.region,
      credentials: {
        accessKeyId: environment.Access_key_Id,
        secretAccessKey: environment.secret_key_id,
      },
    });
  }

  getS3Client() {
    return this.s3;
  }

}