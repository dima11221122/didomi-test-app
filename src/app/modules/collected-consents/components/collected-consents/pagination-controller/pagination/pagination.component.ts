import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { PageItem, PagesPanelGeneratorService } from './pagination-pages-panel/pages-panel-generator/pages-panel-generator.service';

/**
 * Dumb component for displaying of paginator
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() canNext: boolean;
  @Input() canPrev: boolean;

  @Output() nextClicked = new EventEmitter();
  @Output() prevClicked = new EventEmitter();
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePageNumber(pageNumber: number) {
    this.pageChanged.emit(pageNumber);
  }

  nextPage() {
    this.nextClicked.emit();
  }

  prevPage() {
    this.prevClicked.emit();
  }

}
