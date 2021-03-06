import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './component/navigate/navigate.component';
import { MainComponent } from './component/main/main.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { BigImgComponent } from './component/gallery/big-img/big-img.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    MainComponent,
    GalleryComponent,
    ContactComponent,
    BigImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
