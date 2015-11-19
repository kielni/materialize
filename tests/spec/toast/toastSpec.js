describe( 'Toasts:', function() {
  var toastOutDuration = 375;
  var toastInDuration = 300;

  beforeEach(function() {
    loadFixtures('toast/toastFixture.html');
    // elem = $(.toast);
    // elem.toast()
  });

  describe('Toast javascript functions', function() {
    // Toast out animation duration does not count as part of its timer.
    it('should display and remove a toast', function(done) {
      Materialize.toast('Test toast', toastInDuration);

      setTimeout(function() {
        var toast = $('.toast');
        expect(toast.length).toBe(1);
        expect(toast).toBeVisible();
        expect(toast.text()).toBe('Test toast');
        setTimeout(function() {
          toast = $('.toast');
          expect(toast).toBeVisible();
          expect(toast.length).toBe(1, 'because toast duration still on going');
          setTimeout(function() {
            toast = $('.toast');
            expect(toast.length).toBe(0, 'because toast should be removed by now');
            done();
          }, toastOutDuration - 10);
        }, 10);
      }, toastInDuration);
    });

    it('Opens a toast with HTML content', function() {
      var $toastContent = $('<span>I am toast content</span>');
      Materialize.toast($toastContent, 500);


    });
  });


});