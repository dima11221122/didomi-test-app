import { Injectable } from '@angular/core';

/**
 * Represent three dots (...) in {@link PaginationPagesPanelComponent}
 */
export interface PlaceholderPageItem {
  type: 'placeholder';
}

/**
 * Represent a non-selected page number (button with {@link number})
 */
export interface NumberPageItem {
  type: 'pageNumber';
  number: number;
}

/**
 * Represent a selected page number (primary button with {@link number})
 */
export interface ActivePageNumberItem {
  type: 'activePageNumber';
  number: number;
}

export type PageItem = PlaceholderPageItem | NumberPageItem | ActivePageNumberItem;

const PANEL_LENGTH = 5;

@Injectable({
  providedIn: 'root'
})
export class PagesPanelGeneratorService {
  constructor() {
  }

  /**
   * Calculate the start page number of subrange of the pages range so
   * currentPage will be preferably at the center of this subrange or at least inside of the subrange
   * @param totalPages - total count of pages
   * @param currentPage - current page
   * @return start index (start page) of subrange
   */
  // put currentPage in the center of the panel or at least inside of one
  private calculateStartIndex(totalPages: number, currentPage: number): number {
    const panelLength = PANEL_LENGTH;
    const half = Math.floor(panelLength / 2);
    if (currentPage + half < totalPages) {
      return Math.max(currentPage - half, 0);
    } else {
      return Math.max(totalPages - panelLength, 0);
    }
  }

  /**
   * Generate intermediate representation for {@link PaginationPagesPanelComponent}
   * @param totalPages - total count of pages
   * @param currentPage - current page
   */
  generate(totalPages: number, currentPage: number): PageItem[] {
    const startIndex = this.calculateStartIndex(totalPages, currentPage);
    // Generate "the body" of panel
    let result: PageItem[] = [...Array(totalPages)]
      .map((_, index) => {
        const pageNumber = index + 1;
        if (pageNumber === currentPage + 1) {
          return { type: 'activePageNumber', number: pageNumber } as ActivePageNumberItem;
        } else {
          return { type: 'pageNumber', number: pageNumber } as NumberPageItem;
        }
      })
      .slice(startIndex, startIndex + PANEL_LENGTH)
    ;

    // If there are pages before startIndex we add ... before "the body"
    if (startIndex !== 0) {
      result = [{ type: 'placeholder' }, ...result];
    }

    // If there are pages after startIndex we add ... after "the body"
    if ((startIndex + PANEL_LENGTH + 1) < totalPages) {
      result = [...result, { type: 'placeholder' }];
    }

    return result;
  }
}
