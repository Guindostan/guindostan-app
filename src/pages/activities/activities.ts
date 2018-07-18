import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { ApiService } from '../../services/api.service'
import { format, isBefore, isAfter } from 'date-fns'

@Component({
  selector: 'activities-home',
  templateUrl: 'activities.html',
  providers: [ ApiService ]
})
export class ActivitiesPage {
  
  public activities;
  public pastActivities;
  public loading;

  constructor(
    private apiService: ApiService,
    public loadingCtrl: LoadingController
  ) {
    this.getActivities();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    
    this.loading.present();
  }
  
  
  public getActivities = () => {
    this.presentLoadingDefault();
    this.apiService.getActivities()
    .subscribe((act) => {

      this.activities = act;
      this.pastActivities = act;
      const today = format(
        new Date(),
        'MM/DD/YYYY'
      );
      
      this.activities = this.activities.filter((activity) => {
          const eventDate = format(
            activity.acf.fecha,
            'MM/DD/YYYY'
          );

          return isBefore(today, eventDate);
      });

      this.pastActivities = this.pastActivities.filter((activity) => {
        const eventDate = format(
          activity.acf.fecha,
          'MM/DD/YYYY'
        );

        return isAfter(today, eventDate);
      });

      this.loading.dismiss();
    })
  }
}
