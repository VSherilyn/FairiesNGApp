import { Routes } from '@angular/router';

import { HomepageComponent } from './core/homepage/homepage.component'
import { ContactsComponent } from './core/contacts/contacts.component'
import { UserProfileComponent } from "./core/user-profile/user-profile.component";
import { PredictionsComponent } from "./core/user-profile/predictions/predictions.component";

export const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'user', component: UserProfileComponent,
    children: [
      { path: 'predictions', component: PredictionsComponent }
    ]
  }
];