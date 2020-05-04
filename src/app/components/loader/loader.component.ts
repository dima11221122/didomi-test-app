import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UiService } from '../../modules/shared/services/ui/ui.service';

/**
 * Wrapper for mat-loading-bar for showing at the top of the page
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading$ = this.loadingService.selectLoading$;
  constructor(
    private loadingService: UiService
  ) { }

  ngOnInit(): void {
  }

}
