import { Component, OnInit, Input } from '@angular/core';
import { ImgServiceService } from '../../../service/img-service.service';

@Component({
  selector: 'app-big-img',
  templateUrl: './big-img.component.html',
  styleUrls: ['./big-img.component.css']
})
export class BigImgComponent implements OnInit {
 @Input() imgsrc: string;

  constructor(private imgservice:ImgServiceService) { }

  ngOnInit() {
    
  }

}
