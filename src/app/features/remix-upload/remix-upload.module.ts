import { NgModule } from '@angular/core'

import { RemixUploadComponent, RemixUploadSelectSourceComponent, RemixUploadEditDetailsComponent } from './components'
import { RemixUploadState } from './state'

import { SharedModule } from '@shared/shared.module'

@NgModule({
  declarations: [RemixUploadComponent, RemixUploadEditDetailsComponent, RemixUploadSelectSourceComponent],
  imports: [SharedModule],
  providers: [RemixUploadState],
  exports: [RemixUploadComponent],
})
export class RemixUploadModule {}
