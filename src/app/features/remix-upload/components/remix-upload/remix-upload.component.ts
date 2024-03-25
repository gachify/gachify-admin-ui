import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { UploadTabs } from '@features/remix-upload/models'
import { RemixUploadState } from '@features/remix-upload/state'

@Component({
  selector: 'gachi-remix-upload',
  templateUrl: 'remix-upload.component.html',
  styleUrl: 'remix-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemixUploadComponent {
  private readonly remixUploadState = inject(RemixUploadState)

  readonly currentTab = this.remixUploadState.currentTab

  readonly tabs = UploadTabs
}
