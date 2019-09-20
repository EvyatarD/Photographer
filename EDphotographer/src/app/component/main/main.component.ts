import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from 'src/app/service/img-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentImg: string;
  i:number;

  constructor(private imgService: ImgServiceService) {
    this.i = 0;
    this.currentImg = this.imgService.panorama[this.i];
    this.changePanorama();
  }

  ngOnInit() {
  }

  changePanorama(){
    let imgsNumbers = this.imgService.panorama.length;
    setInterval( () =>{
      if (this.i == imgsNumbers)
      this.i=0;
      this.currentImg = this.imgService.panorama[this.i];
      this.i++;
    }, 3000);
  }

}
