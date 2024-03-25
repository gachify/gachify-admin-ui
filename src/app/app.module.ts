import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared'
import { CoreModule } from './core'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
