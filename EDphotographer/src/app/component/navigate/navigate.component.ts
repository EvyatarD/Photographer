import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from 'src/app/service/img-service.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor( private imgService : ImgServiceService) { 
  }

  ngOnInit() {
  }

}
