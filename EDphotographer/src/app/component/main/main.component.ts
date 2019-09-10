import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from 'src/app/service/img-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private imgService : ImgServiceService) { 
  }

  ngOnInit() {
  }

}
