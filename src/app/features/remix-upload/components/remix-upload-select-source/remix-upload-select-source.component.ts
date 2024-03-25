import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { youtubeUrlValidator } from '@core/validators'
import { RemixUploadState } from '@features/remix-upload/state'

@Component({
  selector: 'gachi-remix-upload-select-source',
  templateUrl: 'remix-upload-select-source.component.html',
  styleUrl: 'remix-upload-select-source.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemixUploadSelectSourceComponent implements OnInit {
  private readonly remixUploadState = inject(RemixUploadState)

  readonly form = new FormGroup({
    youtubeUrl: new FormControl('', [Validators.required, youtubeUrlValidator]),
  })

  ngOnInit(): void {
    const source = this.remixUploadState.source()

    if (source) {
      this.form.controls.youtubeUrl.setValue(source)
    }
  }

  handleNext(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched()
      return
    }

    const youtubeUrl = this.form.controls.youtubeUrl.value ?? ''

    this.remixUploadState.selectSource(youtubeUrl)
  }
}
