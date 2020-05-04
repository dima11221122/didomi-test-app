import { Component, Input, OnInit } from '@angular/core';
import { TableHandlerService } from '../../../services/table-handler/table-handler.service';

/**
 * Pagination controller as a replacement of standard mat-paginator.
 * Standard mat-paginator is not suitable here, because it doesn't show pages numbers
 */
@Component({
  selector: 'app-pagination-controller',
  templateUrl: './pagination-controller.component.html',
  styleUrls: ['./pagination-controller.component.scss']
})
export class PaginationControllerComponent implements OnInit {
  totalPages$ = this.tableHandlerService.totalPages$;
  currentPage$ = this.tableHandlerService.currentPage$;
  hasNextPage$ = this.tableHandlerService.hasNextPage$;
  hasPrevPage$ = this.tableHandlerService.hasPrevPage;

  constructor(
    private tableHandlerService: TableHandlerService
  ) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.tableHandlerService.nextPage();
  }

  prevPage() {
    this.tableHandlerService.prevPage();
  }

  setPage(pageNumber: number) {
    this.tableHandlerService.setPage(pageNumber);
  }

}
