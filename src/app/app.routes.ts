import { Routes } from '@angular/router';

import { HomepageComponent } from './core/homepage/homepage.component'
import { ContactsComponent } from './core/contacts/contacts.component'

export const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contacts', component: ContactsComponent },
];