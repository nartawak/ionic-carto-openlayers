import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import {AngularOpenlayersModule} from "ngx-openlayers";
@NgModule({
	declarations: [MapComponent],
	imports: [
    AngularOpenlayersModule
  ],
	exports: [MapComponent]
})
export class ComponentsModule {}
