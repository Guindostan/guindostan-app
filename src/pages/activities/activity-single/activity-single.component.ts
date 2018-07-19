import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { NavController } from 'ionic-angular';

import { ActivityDetail } from '../activity-detail/activity-detail'

@Component({
  selector: 'activity-single',
  templateUrl: 'activity-single.component.html',
  providers: [ ApiService ]
})
export class ActivitySingleComponent implements OnInit {

    @Input() public activity: any;

    public media: {};

    constructor(
        private apiService: ApiService,
        private navController: NavController

    ) {}
    
    public ngOnInit(): void {
        this.getActivityMedia();
    }
    
    public getActivityMedia = () => {
        if (!!this.activity) {
            this.apiService.getActivityMedia(this.activity.featured_media)
            .subscribe((asset) => {
                this.media = asset;
            });
        }
    }

    navigateToActivity(){
        console.log(this.activity);
        this.navController.push(ActivityDetail, {
            title: this.activity.title.rendered,
            content: this.activity.content.rendered,
            media: this.activity.featured_media,
            link: this.activity.link,
            subtitle: this.activity.acf.subtitle,
            date: this.activity.acf.fecha,
            hour: this.activity.acf.time
        });
      }

}
