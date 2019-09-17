import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from 'src/app/service/img-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private imgService : ImgServiceService) { 
  }

  ngOnInit() {
  }

}
