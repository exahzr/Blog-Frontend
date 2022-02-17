import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {ReactiveFormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { ImagesComponent } from './images/images.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageListComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
