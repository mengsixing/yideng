require('../stylesheets/index.css');

xtag.register('x-praise', {
    content: `<div class="hand">
    <div class="hand-left"></div>
    <div class="hand-right">
        <div class="hand-right-finger finger1"><div class='finger1-press'></div></div>
        <div class="hand-right-finger finger2"></div>
        <div class="hand-right-finger finger3"></div>
        <div class="hand-right-finger finger4"></div>
        <div class="hand-right-finger finger5"></div>
        <div class="hidden"></div>
    </div>
</div>`,
 events: {
    tap: function(){
      axios.get('/praise/select').then(function(response) {
        $("#currentPraise").text(response.data);
    });
    }
  }
});

