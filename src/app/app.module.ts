import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommonComponentsModule } from './common/components/common-components.module';
import { CommonServicesModule } from './common/services/common-services.module';

import { AppComponent } from './app.component';

import { AppHeaderModule } from './core/app-header/app-header.module';
import { AppFooterModule } from './core/app-footer/app-footer.module';
import { ContactsModule } from './core/contacts/contacts.module';
import { HomepageModule } from './core/homepage/homepage.module';
import { UserProfileModule } from './core/user-profile/user-profile.module';

import './common/scss/index.scss';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule,
    AppFooterModule,
    ContactsModule,
    CommonComponentsModule,
    CommonServicesModule,
    HomepageModule,
    RouterModule.forRoot(ROUTES),
    UserProfileModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
