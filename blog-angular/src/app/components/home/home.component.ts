import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: AngularFirestore) {
    const things = db.collection('things').valueChanges();
      things.subscribe(console.log);
   }

  ngOnInit(): void {
  }

}
