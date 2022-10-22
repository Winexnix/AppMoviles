import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';




interface hora {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-pie',
  templateUrl: './pie.page.html',
  styleUrls: ['./pie.page.scss'],
})
export class PiePage implements OnInit {
  private db: SQLiteObject

  viajes = []
  constructor(private router: Router, private menu: MenuController, private sqlite: SQLite) {
    this.sqlite.create({
      name: "data.db",
      location: "default"

    }).then((db: SQLiteObject) => {
      this.db = db
      
    })


  }
  ionViewDidEnter(){
    this.listar()
  }


  listar(){
    this.db.executeSql("select * from rutas where asiento > 0",[])
    .then((data) =>{
      this.viajes = []
      for (let i = 0; i < data.rows.length; i++){
        this.viajes.push(data.rows.item(i))
      }
    })
      

  }


  filtro() {
    this.menu.close()
  }
  
  ngOnInit() {
  }


  horas: hora[] = [
    { value: '1', viewValue: '06:00 am' },
    { value: '2', viewValue: '07:00 am' },
    { value: '3', viewValue: '08:00 am' },
    { value: '4', viewValue: '09:00 am' },
    { value: '5', viewValue: '10:00 am' },
    { value: '6', viewValue: '11:00 am' },
    { value: '7', viewValue: '12:00 pm' },
    { value: '8', viewValue: '13:00 pm' },
    { value: '9', viewValue: '14:00 pm' },
    { value: '10', viewValue: '15:00 pm' },
    { value: '11', viewValue: '16:00 pm' },
    { value: '12', viewValue: '17:00 pm' },
    { value: '13', viewValue: '18:00 pm' },
    { value: '14', viewValue: '18:00 pm' },
    { value: '15', viewValue: '19:00 pm' },
    { value: '16', viewValue: '20:00 pm' },
    { value: '17', viewValue: '21:00 pm' },
    { value: '18', viewValue: '22:00 pm' },
    { value: '19', viewValue: '23:00 pm' },
    { value: '20', viewValue: '24:00 am' }
  ];

}
