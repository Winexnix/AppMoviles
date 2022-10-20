import { Component, NgZone, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private db: SQLiteObject
  usuario: string
  clave: string
  hide = true;


  constructor(private toast: ToastController,
    private router: Router,
    private animate: AnimationController,
    private zone: NgZone, private sqlite: SQLite) {

    this.sqlite.create({
      name: "data.db",
      location: "default"

    }).then((db: SQLiteObject) => {
      console.log("base creada")
      this.db = db
      db.executeSql("create table user(usuario varchar(12), clave varchar(12))", [])
      db.executeSql("create table rutas(nombre varchar(20), salida varchar(50), hora varchar(60), asiento number, descripcion varchar(60))", [])
      db.executeSql("insert into user values (?,?)", ['chofer', '1234'])
      db.executeSql("insert into user values (?,?)", ['pasajero', '1234'])
    })

  }
  login() {
    this.db.executeSql("select * from user where  usuario=? and clave=?", [this.usuario, this.clave])
      .then((data) => {
        if (data.rows.length > 0) {
          if (data.rows.item(0).usuario == "chofer") {
            this.mostrarToast("Datos Correctos chofer", 1000)
            this.cargaMovilizacion()
          }
          else {
            this.mostrarToast("Datos Correctos pasajero", 1000)
            this.cargaPasajero()
          }
        } else {
          this.mostrarToast("Usuario y/o Constraseña no encontrados", 3000)
          this.validar()
        }
      })
  }

  limpiar() {
    this.usuario = ""
    this.clave = ""
  }

  validar() {
    this.animate.create()
      .addElement(document.querySelector(".user"))
      .addElement(document.querySelector(".pass"))
      .duration(100)
      .iterations(2)
      .fromTo("transform", "translateX(-5px)", "translateX(0px)")
      .fromTo("border", "2px red solid", "0px transparent solid")
      .fromTo("background", "red", "transparent")
      .play()
  }
  async mostrarToast(mensaje: string, tiempo: number) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: tiempo
    });
    toast.present();
  }
  cargaMovilizacion() {
    this.animate.create()
      .addElement(document.querySelector("#carga"))
      .duration(1500)
      .keyframes([
        { offset: 0, transform: "rotate(36deg)" },
        { offset: 0.1, transform: "rotate(72deg)", zIndex: 10 },
        { offset: 0.2, transform: "rotate(108deg)" },
        { offset: 0.3, transform: "rotate(144deg)" },
        { offset: 0.4, transform: "rotate(180deg)" },
        { offset: 0.5, transform: "rotate(216deg)" },
        { offset: 0.6, transform: "rotate(252deg)" },
        { offset: 0.7, transform: "rotate(288deg)" },
        { offset: 0.8, transform: "rotate(324deg)" },
        { offset: 1, transform: "rotate(360deg)", zIndex: -1 }

      ])
      .onFinish(() => {
        this.zone.run(() => {
          this.router.navigate(['/movilizacion']);
        });
      })
      .play()
  }
  cargaPasajero() {
    this.animate.create()
      .addElement(document.querySelector("#carga"))
      .duration(1500)
      .keyframes([
        { offset: 0, transform: "rotate(36deg)" },
        { offset: 0.1, transform: "rotate(72deg)", zIndex: 10 },
        { offset: 0.2, transform: "rotate(108deg)" },
        { offset: 0.3, transform: "rotate(144deg)" },
        { offset: 0.4, transform: "rotate(180deg)" },
        { offset: 0.5, transform: "rotate(216deg)" },
        { offset: 0.6, transform: "rotate(252deg)" },
        { offset: 0.7, transform: "rotate(288deg)" },
        { offset: 0.8, transform: "rotate(324deg)" },
        { offset: 1, transform: "rotate(360deg)", zIndex: -1 }

      ])
      .onFinish(() => {
        this.zone.run(() => {
          this.router.navigate(['/pie']);
        });
      })
      .play()
  }
}
