Terra.describeViewports('Paginator', ['tiny', 'medium', 'large'], () => {
  describe('Paginator', () => {
    it('default', () => {
      browser.url('/raw/tests/terra-paginator/paginator/paginator');
      Terra.validates.element('default');
    });
  });

  describe('PaginatorNoPages', () => {
    it('default', () => {
      browser.url('/raw/tests/terra-paginator/paginator/paginator-no-pages');
      Terra.validates.element('no pages');
    });
  });

  describe('ProgressivePaginator', () => {
    it('default', () => {
      browser.url('/raw/tests/terra-paginator/paginator/progressive-paginator');
      Terra.validates.element('progressive');
    });
  });
});

Terra.describeViewports('Controlled Paginator', ['large'], () => {
  describe('Controlled Paginator', () => {
    it('displays initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-paginator');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
      Terra.validates.element('0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('3');
    });
  });

  describe('Controlled Paginator without Total count', () => {
    it('displays initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-paginator-no-pages');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
      Terra.validates.element('0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('3');
    });
  });

  describe('Controlled Progressive Paginator', () => {
    it('displays initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-progressive-paginator');
      Terra.validates.element('0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('3');
    });
  });

  describe('Controlled Progressive Paginator without total count', () => {
    it('displays the initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-progressive-paginator-without-total-count');
      Terra.validates.element('0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('3');
    });
  });

  describe('Progressive paginator without total count', () => {
    it('renders without total count', () => {
      browser.url('/raw/tests/terra-paginator/paginator/progressive-paginator-without-total-count');
      Terra.validates.element('progressive no total count');
    });
  });

  describe('Paginator without item count', () => {
    it('renders without item count', () => {
      browser.url('/raw/tests/terra-paginator/paginator/paginator-without-item-count');
      Terra.validates.element('no item count');
    });
  });
});
