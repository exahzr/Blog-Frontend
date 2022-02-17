import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  path:String=""


  constructor(private db: AngularFireStorage) {
    
   }


   upload($event:any){
    this.path = $event.target.files[0]
   }
   uploadImage(){
    console.log(this.path)
    this.db.upload("/files" + Math.random() + this.path, this.path)
   }
}


