import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { naturalNumberValidator } from '@core/validators'
import { UploadTabs } from '@features/remix-upload/models'
import { RemixUploadState } from '@features/remix-upload/state'

@Component({
  selector: 'gachi-remix-upload-edit-details',
  templateUrl: 'remix-upload-edit-details.component.html',
  styleUrl: 'remix-upload-edit-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemixUploadEditDetailsComponent implements OnInit {
  private readonly remixUploadState = inject(RemixUploadState)

  readonly isLoadingDetails = this.remixUploadState.isLoadingDetails

  readonly form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    duration: new FormControl(0, [Validators.required, Validators.min(1), naturalNumberValidator]),
  })

  ngOnInit(): void {
    const details = this.remixUploadState.details()

    if (details) {
      this.form.patchValue(details)
    }
  }

  handleBack(): void {
    this.remixUploadState.navigateToTab(UploadTabs.SELECT_SOURCE)
  }

  handleNext(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched()
      return
    }
  }
}
