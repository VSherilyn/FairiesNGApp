import { Routes } from '@angular/router';

import { ContactsComponent } from './core/contacts/contacts.component'
import { HomepageComponent } from './core/homepage/homepage.component'
import { PredictionsComponent } from './core/user-profile/predictions/predictions.component';
import { RandomizerComponent } from './core/randomizer/randomizer.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';

export const ROUTES: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'instant-answer', component: RandomizerComponent},
  {
    path: 'user', component: UserProfileComponent,
    children: [
      {path: 'predictions', component: PredictionsComponent}
    ]
  }
];