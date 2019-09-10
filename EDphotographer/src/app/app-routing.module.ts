import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [ 
{ path: '', component: MainComponent, pathMatch: 'full' },
{ path: 'gallery', component: GalleryComponent },
{ path: 'contact', component: ContactComponent  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
