 

//
// var options = [
//     
//    {selector: '#experience-lit', offset: 900, callback: 'Materialize.showStaggeredList("#experience-list")' },
//
//  ];
//  Materialize.scrollFire(options);
      

// Skills Bar

//   // on page load...
//        // on browser resize...

//    $(window).resize(function() {
////        moveProgressBar();
////    });
////


// 




$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});




$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });





// MODAL

 $(document).ready(function() { $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
//      ready: function() { alert('Ready'); }, // Callback for Modal open
//      complete: function() { alert('Closed'); } // Callback for Modal close
    }
)});






$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 2000;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        
	  $("#counter-html").counter("start");
      $("#counter-css").counter("start");
        $("#counter-js").counter("start");
        $("#counter-c").counter("start");
        $("#counter-cplusplus").counter("start");
        $("#counter-java").counter("start");
        $("#counter-python").counter("start");
        $("#counter-bootstrap").counter("start");
        $("#counter-jquery").counter("start");
        $("#counter-angular").counter("start");
        $("#counter-nodejs").counter("start");
        $("#counter-mongodb").counter("start");
        $("#counter-git").counter("start");
        $("#counter-jetbrains").counter("start");

  
        console.log("used scroll");
 
    }
	else
	{
		
	}
 });



$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 3200;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        
	
         $("#counter-windows").counter("start");
         $("#counter-android").counter("start");
         $("#counter-linux").counter("start");
         $("#counter-osx").counter("start");
         $("#counter-mis").counter("start");
         $("#counter-it").counter("start");
         $("#counter-fa").counter("start");
         $("#counter-project-management").counter("start");
  
        console.log("used scroll");
 
    }
	else
	{
		
	}
 });

//
//$(window).scroll(function() {
//    var y_scroll_pos = window.pageYOffset;
//    var scroll_pos_test = 2000;             
//	// set to whatever you want it to be
//
//    if(y_scroll_pos > scroll_pos_test) {
//        
//	
//      $("#counter-css").counter("start");
//        console.log("used scroll");
// 
//    }
//	else
//	{
//		
//	}
// });
//   
//    
//
//    // SIGNATURE PROGRESS
//    function moveProgressBar() {
//      console.log("moveProgressBar");
//        var getPercent = ($('.progress-wrap').data('progress-percent') / 1000);
//        var getProgressWrapWidth = $('.progress-wrap').width();
//        var progressTotal = getPercent * getProgressWrapWidth;
//        var animationLength = 2800;
//        
//        // on page load, animate percentage bar to data percentage length
//        // .stop() used to prevent animation queueing
//        $('.progress-bar').stop().animate({
//            left: progressTotal
//        }, animationLength);
//    }


      
              $(document).ready(function(){ $("#counter-html").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 85 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-css").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 85 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});


 $(document).ready(function(){ $("#counter-js").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 60 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});


 $(document).ready(function(){ $("#counter-c").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 30 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-cplusplus").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 50 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-java").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 80 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-python").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 40 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-bootstrap").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 70 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-jquery").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 60 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-angular").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 45 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-nodejs").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 50 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-mongodb").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 40 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-git").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 70 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-jetbrains").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 50 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-windows").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 90 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

 $(document).ready(function(){ $("#counter-android").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 40 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

$(document).ready(function(){ $("#counter-linux").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 50 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});

$(document).ready(function(){ $("#counter-osx").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 40 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});


$(document).ready(function(){ $("#counter-mis").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 50 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});


$(document).ready(function(){ $("#counter-it").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 70 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});



$(document).ready(function(){ $("#counter-fa").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 30 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});


$(document).ready(function(){ $("#counter-project-management").counter({
  autoStart: false,           // true/false, default: true
  duration: 2000,             // milliseconds, default: 1500
  countFrom: 0,
  countTo: 40 ,                // count to this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  placeholder: 0 +"%",           // replace the number with this before counting,
                              // most useful with autoStart: false. default: undefined
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing

  onStart: function() {},     // callback on start of the counting
  onComplete: function() {},  // callback on completion of the counting
  numberFormatter:            // function used to format the displayed numbers.
    function(number) {
      
      return Math.floor(number) + "%";
        
    }
})});






$(document).ready(function(){
$(document).scroll(function() {
var top = $(document).scrollTop();
console.log(top);
    
    if (top > 1400 && top < 3500 ) {
        $("#html, #css").animate({width:"85%"}, 2000);
    } else {
        $("#html, #css").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 1400 && top < 3500) { $("#javascript").animate({width:"60%"}, 2000);
    } else {
        $("#javascript").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1400 && top < 3750) {$("#c").animate({width:"30%"}, 2000);
    }
    else {
        $("#c").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 1400 && top < 3500) { $("#cplusplus").animate({width:"50%"}, 2000); 
    } else {
        $("#cplusplus").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 1400 && top < 3750) { $("#java").animate({width:"80%"}, 2000); }
    else {
        $("#java").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3850) { $("#python").animate({width:"40%"}, 2000); }
    else {
        $("#python").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#bootstrap").animate({width:"70%"}, 2000); }
    else {
        $("#bootstrap").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#jquery").animate({width:"60%"}, 2000); }
    else {
        $("#jquery").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#angular").animate({width:"45%"}, 2000); }
    else {
        $("#angular").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#nodejs").animate({width:"50%"}, 2000); }
    else {
        $("#nodejs").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3500) { $("#mongodb").animate({width:"40%"}, 2000); }
    else {
        $("#mongodb").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3750) { $("#git").animate({width:"70%"}, 2000); }
    else {
        $("#git").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 1400 && top < 3850) { $("#jetbrains").animate({width:"50%"}, 2000); }
    else {
        $("#jetbrains").stop(true).animate({width:"0"}, '2000');
    }
    
     if (top > 3000 && top < 4800) { $("#windows").animate({width:"90%"}, 2000); }
    else {
        $("#windows").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 3200 && top < 4800) { $("#android").animate({width:"40%"}, 2000); }
    else {
        $("#android").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 3400 && top < 4800) { $("#linux").animate({width:"50%"}, 2000); }
    else {
        $("#linux").stop(true).animate({width:"0"}, '2000');
    }
    if (top > 3600 && top < 4800 ) { $("#osx").animate({width:"40%"}, 2000); }
    else {
        $("#osx").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 3000 && top < 4800) { $("#mis").animate({width:"50%"}, 2000); }
    else {
        $("#mis").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 3200 && top < 4800) { $("#it-life-cycle").animate({width:"70%"}, 2000); }
    else {
        $("#it-life-cycle").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 3400 && top < 4800 ) { $("#financial-analysis").animate({width:"30%"}, 2000); }
    else {
        $("#financial-analysis").stop(true).animate({width:"0"}, '2000');
    }
    
    if (top > 3600 && top < 4800 ) { $("#project-management").animate({width:"40%"}, 2000); }
    else {
        $("#project-management").stop(true).animate({width:"0"}, '2000');
    }
    
    
    
    
    
    
    }); 
});














