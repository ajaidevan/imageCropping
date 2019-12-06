import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropping',
  templateUrl: './image-cropping.component.html',
  styleUrls: ['./image-cropping.component.css']
})
export class ImageCroppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
}
