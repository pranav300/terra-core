Terra.describeViewports('Toggle', ['medium'], () => {
  describe('Default', () => {
    it('displays a closed toggle', () => {
      browser.url('/raw/tests/terra-toggle/toggle/default-toggle');
      Terra.validates.element('closed');
    });

    it('expands', () => {
      $('#trigger-toggle').click(); // Open toggle
      Terra.validates.element('expanded');
    });
  });

  it('displays an opened toggle', () => {
    browser.url('/raw/tests/terra-toggle/toggle/open-toggle');
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('opened');
  });

  describe('Animated', () => {
    it('disables focusable elements when closed', () => {
      browser.url('/raw/tests/terra-toggle/toggle/animated-toggle');
      expect($('#toggle').getCSSProperty('visibility').value).toEqual('hidden');
    });

    it('enables focusable elements when opened', () => {
      $('#trigger-toggle').click(); // Open toggle
      $('#toggle').waitForDisplayed();
      expect($('#toggle').getCSSProperty('visibility').value).toEqual('visible');
    });
  });
});
