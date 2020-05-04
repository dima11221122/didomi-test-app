import { TestBed } from '@angular/core/testing';

import { PageItem, PagesPanelGeneratorService } from './pages-panel-generator.service';

describe('PagesPanelGeneratorService', () => {
  let service: PagesPanelGeneratorService;
  const panelSize = 5;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesPanelGeneratorService);
  });

  let generatePageItems = (
    length: number,
    currentPageNumber: number,
    startNumber: number,
    hasStartPlaceholder: boolean,
    hasEndPlaceholder: boolean
  ): PageItem[] => {
    const displayedPageNumber = currentPageNumber + 1;
    let result: PageItem[] = [...Array(length)]
      .map((it, i) => {
        const pageNumber = startNumber + i;
        if (pageNumber === displayedPageNumber) {
          return { type: 'activePageNumber', number: pageNumber };
        } else {
          return { type: 'pageNumber', number: pageNumber }
        }
      });
    if (hasStartPlaceholder) {
      result = [{ type: 'placeholder' }, ...result];
    }

    if (hasEndPlaceholder) {
      result = [...result, { type: 'placeholder' }];
    }

    return result;
  };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#generate', () => {
    it('empty on empty page', () => {
      expect(service.generate(0,0)).toEqual([]);
    })

    describe('Total pages equals to PANEL_SIZE', () => {
      let cases = [
        { name: 'current page is in the middle of panel', currentPage: 2 },
        { name: 'current page is in the start of panel', currentPage: 0 },
        { name: 'current page is in the end of panel', currentPage: 4 },
      ];
      for (const {name, currentPage} of cases) {
        it(name, () => {
          const expected: PageItem[] = generatePageItems(panelSize, currentPage, 1, false, false);
          expect(service.generate(panelSize, currentPage)).toEqual(expected);
        });
      }
    })

    describe('Total pages is less than PANEL_SIZE', () => {
      let cases = [
        { name: 'current page is in the middle of panel', currentPage: 1 },
        { name: 'current page is in the start of panel', currentPage: 0 },
        { name: 'current page is in the end of panel', currentPage: 2 },
      ];

      for (const {name, currentPage} of cases) {
        it(name, () => {
          const expected: PageItem[] = generatePageItems(3, currentPage, 1, false, false);
          expect(service.generate(3, currentPage)).toEqual(expected);
        });
      }
    })

    describe('Total pages is greater than PANEL_SIZE', () => {
      it('current page is in the start of panel', () => {
        const expected: PageItem[] = generatePageItems(panelSize, 1, 1, false, true);
        expect(service.generate(100, 1)).toEqual(expected);
      })

      it('current page is in the middle of range of pages', () => {
        const expected: PageItem[] = generatePageItems(panelSize, 49, 48, true, true);
        expect(service.generate(100, 49)).toEqual(expected);
      })

      it('current page is in the end of range of pages', () => {
        const expected: PageItem[] = generatePageItems(panelSize, 98, 96, true, false);
        expect(service.generate(100, 98)).toEqual(expected);
      })

    })
  });
});
