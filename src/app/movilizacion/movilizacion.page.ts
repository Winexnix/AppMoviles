import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, MenuController } from '@ionic/angular';





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
  nombre: string
  desde: string
  hora: string
  asiento: number
  descripcion: string
  hacia:string






  constructor(private router: Router, private menu: MenuController, private sqlite: SQLite, private alert: AlertController) {
    this.sqlite.create({
      name: "data.db",
      location: "default"

    }).then((db: SQLiteObject) => {
      console.log("base creada")
      this.db = db

    })
  }

  async info(texto: string) {
    const alert = await this.alert.create({
      header: texto,
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }


  crearRuta() {
    this.db.executeSql("insert into rutas values (?,?,?,?,?,?)", [this.nombre, this.desde, this.hora, this.asiento, this.descripcion, this.hacia])
    this.info('Viaje Registrado Correctamente')
    
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
