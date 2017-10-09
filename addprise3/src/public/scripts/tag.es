require('../stylesheets/index.css');
var throttle= require('./throttle.js').default;
var thumbZan= throttle(function(){
          axios.get('/praise/add').then(function(response) {
        var number= parseInt( $("#currentPraise").text());
        $("#currentPraise").text(number+1);
        $('.hand-small').addClass('animate');
      setTimeout(function(){
        $('.hand-small').removeClass('animate');
       },1001)
    });
    },1000);


var starZan= throttle(function(){
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
    thumbZan();
    }
  }
});

xtag.register('x-star', {
    content: `<div class="hand">
    <div class="star-content">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507563932375&di=9bc75e76d14bc57ca6a9349dfbb7b2ec&imgtype=0&src=http%3A%2F%2Fmail.qlv77.com%2Fuploads%2Fcontent%2F2012%2F20121217142646_78218678_thum.png" />
    </div>
    
    <div class="hand-small">+1</div>
</div>`,
 events: {
    click: function(){
    starZan();
    }
  }
});

