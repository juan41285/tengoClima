import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Coordinates, Geolocation } from '@ionic-native/geolocation';
import { Platform, LoadingController,AlertController } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { ClimaProvider } from '../../providers/clima/clima';

/**
 * Generated class for the ClimaPage page.
 *43TRRHJVYN
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clima',
  templateUrl: 'clima.html',
})
export class ClimaPage {

  location: Coordinates;
  data: any;



  constructor(
               private geolocation: Geolocation,
               private platform: Platform,
               private locationAccuracy: LocationAccuracy,
               public  climaProvider: ClimaProvider,
               public  loadingCtrl: LoadingController,
               public alertCtrl: AlertController
               ) { }



ionViewDidLoad(){
      this.enableLocation()
  }
//Obtener ubicacion y devolver lat y logn
async getLocation() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Obteniendo información actualizada',
    });
    loading.present();
    const { coords } = await this.geolocation.getCurrentPosition();
    this.location = coords;
    console.log('this.location ', JSON.stringify(this.location) )
    this.climaProvider.getClimaData(this.location.latitude, this.location.longitude)
        .subscribe(
            (data) => { // Success
              this.data = data;
              console.log(data)
              loading.dismiss();
            },
            (error) =>{
              loading.dismiss();
              this.errorApi();
              console.error(JSON.stringify(error));

            }
        )
  }


//Checkear si esta habilitado el gps
async enableLocation()
{
   await this.platform.ready();
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      console.log('canRequest', canRequest)
      if(canRequest) {
      // the accuracy option will be ignored by iOS
      this.locationAccuracy
          .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
          .then(() => {
            console.log('canRequest', canRequest);
            this.getLocation()
          },
          error => console.log('Error requesting location permissions'+JSON.stringify(error))
          );
      }else{
        this.getLocation()
      }

      });
}

doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.enableLocation()
    refresher.complete();
  }

//erro en APi
 errorApi() {
    let alert = this.alertCtrl.create({
      title: 'Sin datos',
      message: 'Hubo un problema al actualizar el pronostico',
      buttons: [
        {
          text: 'Salir',
          handler: () => {
            this.platform.exitApp();
          }
        },
        {
          text: 'Reintentar',
          handler: () => {
            this.enableLocation()
          }
        }
      ]
    });

    alert.present();
  }



}

