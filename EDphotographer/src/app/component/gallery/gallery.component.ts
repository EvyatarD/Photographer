import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from '../../service/img-service.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  currentImg: string;
  constructor(private imgService: ImgServiceService) {
  }

  ngOnInit() {
  }

  clickImg(src: string) {
    if (window.screen.width > 800) {
      this.currentImg = src;
      this.imgService.clickImg();
    }
  }

}
