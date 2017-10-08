require('../stylesheets/index.css');
var throttle= require('./throttle.js').default;
var sss= throttle(function(){
          axios.get('/praise/add').then(function(response) {
        var number= parseInt( $("#currentPraise").text());
        $("#currentPraise").text(number+1);
        $('.hand-small').addClass('animate');
      setTimeout(function(){
        $('.hand-small').removeClass('animate');
       },1001)
    });
    },1000);

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
    <div class="hand-small">+1</div>
</div>`,
 events: {
    click: function(){
    
    sss();
    }
  }
});

