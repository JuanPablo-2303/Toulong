import { Component, ViewChild, ViewChildren } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';
import { stringify } from 'querystring';
import { CampPage } from '../camp/camp.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor() {
  }

}
