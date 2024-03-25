import { Injectable, signal } from '@angular/core'

import { RemixDetails, UploadTabs } from '../models'

import { StateModel } from '@core/models'

export interface RemixUploadModel {
  currentTab: UploadTabs
  source: string | null
  isLoadingDetails: boolean
  details: RemixDetails | null
}

@Injectable()
export class RemixUploadState implements StateModel<RemixUploadModel> {
  readonly currentTab = signal(UploadTabs.SELECT_SOURCE)
  readonly source = signal<string | null>(null)
  readonly isLoadingDetails = signal(false)
  readonly details = signal<RemixDetails | null>(null)

  navigateToTab(tab: UploadTabs): void {
    this.currentTab.set(tab)
  }

  selectSource(youtubeUrl: string): void {
    const source = this.source()

    if (!source || source !== youtubeUrl) {
      this.source.set(youtubeUrl)
      this.fetchDetails()
    }

    this.navigateToTab(UploadTabs.EDIT_DETAILS)
  }

  private fetchDetails(): void {
    // this.isLoadingDetails.set(true)
    // Fetch details from the server
  }
}
