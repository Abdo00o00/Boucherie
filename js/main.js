///                                                             'صلي عالنبي بس الاول' 
$(document).ready(function(){


  //functions/////////////////////////////////////////////////////////////////////ظظظظظظ


  //start func to make numbers rounded to two decimals
  function roundToTwoDecimals(x) {
    return parseFloat(x.toFixed(2));
  }
  //end func to make numbers rounded to two decimals

  
  // Function to get the height of the body and log scroll information
  var scrollPosition ;
  var bodyHeight ;
  let bodyWidth ;
  let scrollPositionpercent ;
  function logBodyHeightAndScroll() {
    bodyHeight = $('body').height(); // Get the height of the body
    bodyWidth = $('body').width(); // Get the width of the body
    scrollPosition = $(window).scrollTop(); // Get the current scroll position from the top
    
    bodyHeight = roundToTwoDecimals(bodyHeight);
    bodyWidth = roundToTwoDecimals(bodyWidth);
    scrollPosition = roundToTwoDecimals(scrollPosition);

    console.log('Body Height: ' + bodyHeight + 'px');
    console.log('Current Scroll Position: ' + scrollPosition + 'px');
    console.log('Body Width: ' + bodyWidth + 'px');
    
    if (scrollPosition > 0) {
      console.log('User has scrolled ' + scrollPosition + 'px from the start.');
    } else {
      console.log('User is at the top of the page.');
    }
    scrollPositionpercent = (scrollPosition / bodyHeight) * 100;
    // scrollPositionpercent = parseFloat(scrollPositionpercent.toFixed(2));
    console.log(scrollPositionpercent + "%");
    // if (bodyWidth < 1000) {
      moveingImages();

      // console.log('done...');
    // }
  }

  // start func to move images
  function moveingImages() {
    if (scrollPositionpercent > 3.5 && scrollPositionpercent < 21) {
      $('#skills .homeImgR').css('transform', `translateY(${scrollPositionpercent*6}%)`);
      $('#skills .homeImgL').css('transform', `translateY(-${scrollPositionpercent*6}%)`);
      // console.log('done...');
    } else {
      $('#skills .homeImgR').css('transform', `translateY(0)`);
      $('#skills .homeImgL').css('transform', `translateY(0)`);

    }

    if (scrollPositionpercent > 13 && scrollPositionpercent < 28) {
      $('#Quality-Services .left-img img').css('transform', `scale(${1-((scrollPositionpercent-11)/100)})`);
      $('#Quality-Services .right-img img').css('transform', `scale(${1+((scrollPositionpercent-11)/100)})`);
      // console.log('done.......');
    } else {
      $('#Quality-Services .left-img img').css('transform', `scale(1)`);
      $('#Quality-Services .right-img img').css('transform', `scale(1)`);

    }
    
    if (scrollPositionpercent > 21 && scrollPositionpercent < 30) {
      $('#Quality-Services .the-center .home-img').css('transform', `scale(${1-((scrollPositionpercent-15)/90)})`);

      console.log('done.......');
    }

  }
  // end func to move images






  // statr when start loading if not on the top make nav disapper
  if ($(window).scrollTop() > 0) {
    $('header').css('transform', 'translateY(-100px)');
    // console.log('cccc')
  }
  // end when start loading if not on the top make nav disapper
  
  let lastScrollTop = 0;
  $(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop(); // الحصول على موضع التمرير الحالي


    if (currentScrollTop <= lastScrollTop) {
      // المستخدم يمرر لأعلى
      console.log('المستخدم يمرر لأعلى');
      $('header').css('transform', 'translateY(0px)');
      // $('header').fadeOut();
      //هنا الحته بتاع الصوره 
      
      
    } else {
      // المستخدم يمرر للأسفل
      console.log('المستخدم يمرر لأسفل');
      $('header').css('transform', 'translateY(-100px)');
      // $('header').fadeIn();
      //هنا الحته بتاع الصوره 


    }

    // تحديث موضع التمرير السابق
    lastScrollTop = currentScrollTop;
  });
  // end func for navbar scrolling

  
  // Run functions when the page loads/////////////////////////////////
  logBodyHeightAndScroll();
  // navback()

  // end Run functions when the page loads/////////////////////////////////

  
  // start when scrolling and resizing
  $(window).scroll(function() {
    logBodyHeightAndScroll();
    // navback();

  });
  // end when scrolling and resizing

  
  // تحديث الخلفية عند تغيير حجم الشاشة
  // when resizing the screen
  $(window).resize( function() {
    logBodyHeightAndScroll()
  });
  //end when resizing the screen
  //
  //
  //
  //
  //
  //

  typeof(scrollPosition)
  });
//                                                                'the end sweety'

