import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { MenuController } from '@ionic/angular';





interface hora {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-movilizacion',
  templateUrl: './movilizacion.page.html',
  styleUrls: ['./movilizacion.page.scss'],
})
export class MovilizacionPage implements OnInit {
  private db: SQLiteObject
  nombre : string
  salida : string
  hora : string
  asiento : number
  descripcion : string





  constructor(private router: Router, private menu: MenuController, private sqlite: SQLite) {
    this.sqlite.create({
      name: "data.db",
      location: "default"

    }).then((db: SQLiteObject) => {
      console.log("base creada")
      this.db = db
      
    })
  }

  backhome() {
    this.router.navigate(['/home'])
  }
  crearRuta(){
    this.db.executeSql("insert into rutas values (?,?,?,?,?)", [this.nombre,this.salida,this.hora,this.asiento,this.descripcion])
    console.log('Datos insertados')
  }


  openMenu() {
    this.menu.open();
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
