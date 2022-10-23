import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})
export class TomarviajePage implements OnInit {

  constructor(private router: Router, private sqlite: SQLite) { }

  ngOnInit() {
  }

  
}
