import { Injectable } from '@angular/core';


export interface PlaceholderPageItem {
  type: 'placeholder'
}

export interface NumberPageItem {
  type: 'pageNumber',
  number: number;
}

export interface ActivePageNumberItem {
  type: 'activePageNumber',
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

  generate(totalPages: number, currentPage: number): PageItem[] {
    const startIndex = this.calculateStartIndex(totalPages, currentPage);
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
    if (startIndex !== 0) {
      result = [{ type: 'placeholder' }, ...result];
    }

    if ((startIndex + PANEL_LENGTH + 1) < totalPages) {
      result = [...result, { type: 'placeholder' }];
    }

    return result;
  }
}
