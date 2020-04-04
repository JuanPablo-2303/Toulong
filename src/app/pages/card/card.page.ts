import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage{

  nombre: string;
  descripcion: string;
  direccion: string;
  fecha: string;
  todo: any;
  item: Observable<any>;
  itemRef: AngularFireObject<any>;
  constructor(db: AngularFireDatabase)

  constructor(db: AngularFireDatabase) { 
    this.itemRef = db.object('BRIGADAS');
    this.item = this.itemRef.valueChanges();
    this.itemRef.snapshotChanges().subscribe(action => {
    console.log(action.type);
    console.log(action.key);
    console.log(action.payload.val());
    this.todo = action.payload.val();
    this.nombre = this.todo.nombre;
    this.descripcion = this.todo.descricion;
    this.direccion = this.todo.direccion;

    this.nombre = this.todo.nombre2;
    this.descripcion = this.todo.descricion2;
    this.direccion = this.todo.direccion2;

    this.nombre = this.todo.nombre3;
    this.descripcion = this.todo.descricion3;
    this.direccion = this.todo.direccion3;
    });
  }


}
