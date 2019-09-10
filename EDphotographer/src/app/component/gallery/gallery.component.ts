import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from '../../service/img-service.service' ;


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor( private imgService : ImgServiceService) { 
    
  }

  ngOnInit() {
  }

}
