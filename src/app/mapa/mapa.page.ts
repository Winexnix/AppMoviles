import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.presentLoading( 'Generando ruta' );

    setTimeout(() => {

      this.loadingCtrl.dismiss();

    }, 1500 );


  }
  async presentLoading( message: string ) {
    this.loading = await this.loadingCtrl.create({
      message
      //duration: 3000
    });

    return this.loading.present();
  }

}
