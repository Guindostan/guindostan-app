import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from '../pages/tabs/tabs';
import { ActivitiesPage } from '../pages/activities/activities';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActivitySingleComponent } from '../pages/activities/activity-single/activity-single.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ActivitiesPage,
    ActivitySingleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      pageTransition: "md-transition"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,  
    AboutPage,
    ContactPage,
    ActivitiesPage,
    ActivitySingleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
