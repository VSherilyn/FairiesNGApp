import { NgModule } from '@angular/core';
import { PredictionsService } from "./predictions.service";

const providers = [
  PredictionsService
];

@NgModule({
  imports: [],
  providers
})
export class CommonServicesModule {
}