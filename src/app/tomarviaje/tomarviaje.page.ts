import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})
export class TomarviajePage implements OnInit {
  private db: SQLiteObject
  historial = []
  constructor(private router: Router, private sqlite: SQLite) { 
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then((db: SQLiteObject) => {
      this.db = db
    })
  }

  cancelarviaje(idviaje : string){
    this.db.executeSql("DELETE FROM historial WHERE idviaje = ?",[idviaje])
    this.db.executeSql("Update rutas set asiento = asiento + 1 where idviaje = ?",[idviaje])
    this.router.navigate(['/pie']);
  }
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.listar()
  }
  
  listo(){
    this.router.navigate(['/pie']);
  }

  listar(){
    this.db.executeSql("select * from historial order by idviaje desc",[])
    .then((data) =>{
        this.historial.push(data.rows.item(0))
      
    })
  }
}
