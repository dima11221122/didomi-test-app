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
import { PageItem, PagesPanelGeneratorService } from './pages-panel-generator/pages-panel-generator.service';

@Component({
  selector: 'app-pagination-pages-panel',
  templateUrl: './pagination-pages-panel.component.html',
  styleUrls: ['./pagination-pages-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationPagesPanelComponent implements OnInit, OnChanges {
  @Input() totalPages: number;
  @Input() currentPage: number;

  @Output() pageChanged = new EventEmitter<number>();

  pageItems: PageItem[] = [];
  constructor(
    private pagesPanelGeneratorService: PagesPanelGeneratorService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageItems = this.pagesPanelGeneratorService.generate(this.totalPages, this.currentPage);
  }

  changePageNumber(number: number) {
    return this.pageChanged.emit(number - 1);
  }



}
