import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-file-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-file-input.component.html',
  styleUrl: './custom-file-input.component.css'
})
export class CustomFileInputComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Output() fileSelected = new EventEmitter<File>();

  // Trigger the file input click
  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileSelected.emit(file);
    }
  }
  
}

