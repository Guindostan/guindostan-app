import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'activity-single',
  templateUrl: 'activity-single.component.html',
  providers: [ ApiService ]
})
export class ActivitySingleComponent implements OnInit {

    @Input() public activity: any;

    public media: {};

    constructor(
        private apiService: ApiService
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

}
