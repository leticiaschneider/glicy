import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage: number;
  showTotal: boolean;
  showSearch: boolean = false;
  pageTotal: number = 0;
  itemTotal: number = 0;
  pagination: number[] = [];
  paginationRange: number;
  paginationArray: number[] = [];
  pageMax: number = 0;
  pageMin: number;
  pageSearch: any;
  @Input() paginatorConfig: any;
  @Output() changePage = new EventEmitter<any>();

  constructor() {
    this.showTotal = true;
    this.itemTotal = 0;
    this.paginationRange = 5;
    this.currentPage = 1;
    this.pageMin = 0;
    this.pageSearch = {
      pageNumber: null,
      errorMsg: null
    };
    this.changePage.emit(this.currentPage);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if (
      changes['paginatorConfig'].previousValue &&
      changes['paginatorConfig'].currentValue.total !== changes['paginatorConfig'].previousValue.total
    ) {
      this.currentPage = (changes.paginatorConfig.currentValue.pageLoaded || 1);
      this.pageMin = 0;
      this.pageMax = this.paginationRange;
    }
    if (changes['paginatorConfig'].firstChange) {
      const { itemsPerPage, total, showTotal, showSearch = false } = changes.paginatorConfig.currentValue;
      let pagesCount = 1;
      this.itemTotal = total;
      this.pageTotal = Math.ceil(total / itemsPerPage); // round up
      this.showTotal = showTotal;
      this.showSearch = showSearch;
      this.paginationArray = [];
      this.paginationRange = 5; // reset
      this.paginationRange = this.pageTotal < this.paginationRange ? this.pageTotal : this.paginationRange;
      this.pageMax = this.pageMax > this.paginationRange ? this.pageMax : this.paginationRange;
      while (pagesCount <= this.pageTotal) {
        this.paginationArray.push(pagesCount);
        pagesCount++;
      }
      this.pagination = this.paginationArray.slice(this.pageMin, this.pageMax);
      if (changes.paginatorConfig.currentValue.pageLoaded > 5 && changes.paginatorConfig.currentValue.pageLoaded) {
        this.onClickForward(changes.paginatorConfig.currentValue.pageLoaded, true);
      }
      if (changes.paginatorConfig.currentValue.currentPage) {
        this.currentPage = changes.paginatorConfig.currentValue.currentPage;
      }
    }
  }

  private setCurrentPage(clickedPage: any) {
    if (clickedPage === this.currentPage) {
      return;
    }
    this.currentPage = clickedPage;
    this.changePage.emit(this.currentPage);
  }

  private moveNumberPage(clickedPage: any) {
    if (clickedPage > this.currentPage) {
      this.pageMax = this.pageMax < clickedPage ? this.pageMax + 1 : this.pageMax;
      this.pageMin = this.pageMin + this.paginationRange < clickedPage ? this.pageMin + 1 : this.pageMin;
    } else {
      this.pageMax = this.pageMax - this.paginationRange >= clickedPage ? this.pageMax - 1 : this.pageMax;
      this.pageMin = this.pageMin >= clickedPage ? this.pageMin - 1 : this.pageMin;
    }
    this.pagination = this.paginationArray.slice(this.pageMin, this.pageMax);
  }

  public movePages(_page: any, _direction: any) {
    if (_page < 1 || _page > this.pageTotal) {
      return;
    }
    this.pageSearch.pageNumber = null;
    this.pageSearch.errorMsg = null;
    this.setCurrentPage(_page);
    switch (_direction) {
      case 'forward':
        if (_page > (this.pageTotal - 3)) {
          this.pageMin = this.pageTotal - this.paginationRange;
          this.pageMax = this.pageTotal;
        }
        else if (_page > 3) {
          this.pageMin++;
          this.pageMax++;
        }
        else {
          this.pageMin = 0;
          this.pageMax = this.paginationRange;
        }
        break;
      case 'backward':
        if (_page < this.paginationRange) {
          this.pageMin = 0;
          this.pageMax = this.paginationRange;
        }
        else if (_page < (this.pageTotal - 2)) {
          this.pageMin--;
          this.pageMax--;
        }
        else {
          this.pageMin = this.pageTotal - this.paginationRange;
          this.pageMax = this.pageTotal;
        }
        break;
    }
  }

  public onClickArrow(page: any) {
    if (page < 1 || page > this.pageTotal) {
      return;
    }
    this.pageSearch.pageNumber = null;
    this.pageSearch.errorMsg = null;
    this.moveNumberPage(page);
    this.setCurrentPage(page);
  }

  public onClickForward(page: any, _search = false) {
    this.pageMax = page;
    this.pageMin = page - this.paginationRange;
    this.pagination = this.paginationArray.slice(this.pageMin, this.pageMax);
    if (!_search) {
      this.pageSearch.pageNumber = null;
    }
    this.pageSearch.errorMsg = null;
    this.setCurrentPage(page);
  }

  public onClickBackward(page: any, _search = false) {
    this.pageMax = this.paginationRange;
    this.pageMin = 0;
    this.pagination = this.paginationArray.slice(this.pageMin, this.pageMax);
    if (!_search) {
      this.pageSearch.pageNumber = null;
    }
    this.pageSearch.errorMsg = null;
    this.setCurrentPage(page);
  }

  public onClickChangePage(page: any) {
    if (page < 1 || page > this.pageTotal) {
      return;
    }
    this.setCurrentPage(page);
    this.pageSearch.pageNumber = null;
  }

  public onClickGoToPage() {
    const page = this.pageSearch.pageNumber;
    if (!page) {
      if (page === 0) {
        this.pageSearch.errorMsg = `Nº da página de 1 a ${this.pageTotal}`;
      }
      else {
        $('.pagination input').focus();
      }
      return;
    }
    if (page < 1 || page > this.pageTotal) {
      this.pageSearch.errorMsg = `Nº da página de 1 a ${this.pageTotal}`;
      return;
    }
    if (this.pageMin < page && page < this.pageMax) {
      this.setCurrentPage(page);
    }
    else {
      (page <= 5) ? this.onClickBackward(page, true) : this.onClickForward(page, true);
    }
    this.pageSearch.errorMsg = null;
  }

  public inputKeyUp(_event: any) {
    if (_event.key === 'Enter') {
      this.onClickGoToPage()
    }
  }

}
