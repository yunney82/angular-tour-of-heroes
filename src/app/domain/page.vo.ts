export class PageVO {
  constructor(public pageIndex: number,
              public pageSize: number,
              public totalCount: number,
              public pageSizeOptions?: number[]) {
    if (!this.pageSizeOptions) {
      this.pageSizeOptions = [5, 15, 30, 60, 90];
    }

  }
}
