import { Injectable } from '@angular/core';
import { AwsService } from './aws.service';
import { PutObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private awsService: AwsService) {}

  async uploadFile(file: File): Promise<void> {
    const s3 = this.awsService.getS3Client();

    const command = new PutObjectCommand({
      Bucket: 'adel-zsombor-wedding',
      Key: file.name,
      Body: file,
      ContentType: file.type,
    });

    try {
      await s3.send(command);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
    }
  }
  async listImages(): Promise<string[]> {
    const s3 = this.awsService.getS3Client();
    const bucketName = 'adel-zsombor-wedding';
    const command = new ListObjectsCommand({
      Bucket: bucketName,
    });

    try {
      const data = await s3.send(command);
      if (data.Contents) {
        return data.Contents
          .filter((item) => item.Key && item.Key.endsWith('.jpg')) // Adjust the filter based on your image types
          .map((item) => `https://${bucketName}.s3.amazonaws.com/${item.Key}`);
      }
      return [];
    } catch (error) {
      console.error('Error listing objects', error);
      return [];
    }
  }


}