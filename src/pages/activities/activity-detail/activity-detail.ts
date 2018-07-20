import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController } from 'ionic-angular';
import { ApiService } from '../../../services/api.service';
import { UtilsService } from '../../../services/utils.service';
@Component({
  selector: 'activity-detail',
  templateUrl: 'activity-detail.html',
  providers: [ ApiService, UtilsService ]
})
export class ActivityDetail implements OnInit {
  public title: string;
  public content: string;
  public media: string;
  public link: string;
  public subtitle: string;
  public date: any;
  public hour: string;
  public image: {};
  public loading: any;
  
  constructor(
    public navParams: NavParams,
    public apiService: ApiService,
    public utilsService: UtilsService,
    public loadingCtrl: LoadingController
  ) {
    this.title = navParams.get('title');
    this.content = navParams.get('content');
    this.media = navParams.get('media');
    this.link = navParams.get('link');
    this.subtitle = navParams.get('subtitle');
    this.date = navParams.get('date');;
    this.hour = navParams.get('hour');
 }

  ngOnInit(): void {
    this.getActivityMedia();
    this.date = this.utilsService.parseDate(this.date);
  }

  private getActivityMedia = () => {
    this.presentLoadingDefault();
    this.apiService.getActivityMedia(this.media)
    .subscribe((asset) => {
        this.image = asset;
    });
    this.loading.dismiss();
  }

  private presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    
    this.loading.present();
  }

  
}
