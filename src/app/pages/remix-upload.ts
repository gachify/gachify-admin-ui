import { ChangeDetectionStrategy, Component } from '@angular/core'

import { RemixUploadModule } from '@features/remix-upload'

@Component({
  standalone: true,
  selector: 'gachi-remix-upload-page',
  template: '<gachi-remix-upload/>',
  imports: [RemixUploadModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemixUploadPage {}
