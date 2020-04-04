import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.page.html',
  styleUrls: ['./camp.page.scss'],
})
export class CampPage {

  nombre: string;
  descripcion: string;
  direccion: string;
  fecha: string;
  todo: any;
  item: Observable<any>;
  itemRef: AngularFireObject<any>;
  constructor(db: AngularFireDatabase)

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('brigadas');
    this.item = this.itemRef.valueChanges();
    this.itemRef.snapshotChanges().subscribe(action => {
    console.log(action.type);
    console.log(action.key);
    console.log(action.payload.val());
    this.todo = action.payload.val();
    this.nombre = this.todo.nombre;
    this.descripcion = this.todo.descripcion;
    this.direccion = this.todo.direccion;
    this.fecha = this.todo;
    });
   }
}
