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
    
    
    // console.log('Body Height: ' + bodyHeight + 'px');
    // console.log('Current Scroll Position: ' + scrollPosition + 'px');
    // console.log('Body Width: ' + bodyWidth + 'px');
    
    // if (scrollPosition > 0) {
    //   console.log('User has scrolled ' + scrollPosition + 'px from the start.');
    // } else {
    //   console.log('User is at the top of the page.');
    // }
    scrollPositionpercent = (scrollPosition / bodyHeight) * 100;
    scrollPositionpercent = roundToTwoDecimals(scrollPositionpercent);
    console.log(scrollPositionpercent + "%");
    if (bodyWidth > 1000) {
      fixedLine();
      moveingImages();
      changeImg();
    } else if (bodyWidth < 1000) {
      fixedLineless();
      changeImgWhenResizing();
    }
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

      // console.log('done.......');
    }

  }
  // end func to move images



  
  // start func to make the line div stop and take fixed and make it disapper
//--------------------my func
  // function fixedLine() {
  //   let topLineDiv = $('#skills .center-line-div').offset().top;
  //   let topLineDiv2 = $('#Quality-Services .center-line-div').offset().top;
  //   let topLineDiv3 = $('#carouselSec .the-top .center-line-div').offset().top;
  //   let topLineDiv4 = $('#carouselSec .text-center .center-line-div').offset().top;

  //   if ($(window).scrollTop() >= topLineDiv && $(window).scrollTop() < topLineDiv2) {
  //     let delta = ($(window).scrollTop() - topLineDiv)/3.5 +52 ;
  //     $('#skills .child-center-line-div').css('height', `${delta}%`);
  //   } 
  //   if($(window).scrollTop() >= topLineDiv2 && $(window).scrollTop() < topLineDiv3) {
  //     let delta2 = ($(window).scrollTop() - topLineDiv2)/3.5 +52 ;
  //     $('#Quality-Services .child-center-line-div').css('height', `${delta2}%`);
  //   } 
  //   if ($(window).scrollTop() >= topLineDiv3 && $(window).scrollTop() < topLineDiv4){
  //     let delta3 = ($(window).scrollTop() - topLineDiv3)/3.5 +52 ;
  //     $('#carouselSec .the-top .child-center-line-div').css('height', `${delta3}%`);
  //   } 
  //   if ($(window).scrollTop() >= topLineDiv4){
  //     let delta4 = ($(window).scrollTop() - topLineDiv4)/3.5 +52 ;
  //     $('#carouselSec .text-center .child-center-line-div').css('height', `${delta4}%`);
  //   }

  // }

//------------------chatGPT`s func
  function fixedLine() {
    const scrollTop = $(window).scrollTop(); // حساب التمرير مرة واحدة
    const sections = [
      { element: '#skills .center-line-div', target: '#skills .child-center-line-div' },
      { element: '#Quality-Services .center-line-div', target: '#Quality-Services .child-center-line-div' },
      { element: '#carouselSec .the-top .center-line-div', target: '#carouselSec .the-top .child-center-line-div' },
      { element: '#carouselSec .text-center .center-line-div', target: '#carouselSec .text-center .child-center-line-div' }
    ];
    
    const heights = sections.map(section => $(section.element).offset().top); // جلب المسافات من أعلى الصفحة لكل قسم

    // دالة لحساب الـ delta وتطبيق الارتفاع على العنصر المناسب
    function applyHeight(target, start, scrollTop) {
      let delta = (scrollTop - start) / 3.5 + 52;
      delta = Math.min(delta, 100); // تحديد الحد الأقصى للارتفاع ليكون 100%
      $(target).css('height', `${delta}%`);
    }

    for (let i = 0; i < sections.length; i++) {
      if (scrollTop >= heights[i] && (i === sections.length - 1 || scrollTop < heights[i + 1])) {
        applyHeight(sections[i].target, heights[i], scrollTop);
        break; // وقف الحلقة بعد العثور على القسم الصحيح
      }
    }
  }
  // end func to make the line div stop and take fixed and make it disapper



  //
  function fixedLineless() {
    const scrollTop = $(window).scrollTop(); // حساب التمرير مرة واحدة
    const sections = [
      { element: '#skills .center-line-div', target: '#skills .child-center-line-div' },
      { element: '#Quality-Services .center-line-div', target: '#Quality-Services .child-center-line-div' },
      { element: '#carouselSec .the-top .center-line-div', target: '#carouselSec .the-top .child-center-line-div' },
      { element: '#carouselSec .text-center .center-line-div', target: '#carouselSec .text-center .child-center-line-div' }
    ];
    
    const heights = sections.map(section => $(section.element).offset().top); // جلب المسافات من أعلى الصفحة لكل قسم

    // دالة لحساب الـ delta وتطبيق الارتفاع على العنصر المناسب
    function applyHeight(target, start, scrollTop) {
      let delta = (scrollTop - start) / 3.5 + 52;
      delta = Math.min(delta, 100); // تحديد الحد الأقصى للارتفاع ليكون 100%
      $(target).css('height', `${delta}%`);
    }

    for (let i = 0; i < sections.length; i++) {
      if (scrollTop >= heights[i] && (i === sections.length - 1 || scrollTop < heights[i + 1])) {
        applyHeight(sections[i].target, heights[i], scrollTop);
        break; // وقف الحلقة بعد العثور على القسم الصحيح
      }
    }
  } 

  // start func to change src img when scrolling
  function changeImg() {
    if (scrollPositionpercent < 55 ) {
      $('.bgDiv').css('background-image', 'url(../assets/images/asset8.webp)');
      console.log('xx')
    } else {
      $('.bgDiv').css('background-image', 'url(../assets/images/asset12.webp)');
      console.log('xxlllllll')
    }
  } 
  // end func to change src img when scrolling

  // start func to change the img when resizing
  function changeImgWhenResizing() {
    $('.FirstSectionTransparent').addClass('bgDiv').css({
      'background-image': 'url(../assets/images/asset8.webp)',
       'padding' : '0px', 
       'background-size ': 'cover',
       'margin' : '0' ,
       'height' : '400px'
      } );
    $('.LastSectionTransparent' ).addClass('bgDiv').css({
      'background-image': 'url(../assets/images/asset12.webp)',
       'padding' : '0px', 
       'background-size ': 'cover',
       'margin' : '0' ,
       'height' : '400px'
      });
    // $('.d-n-resizing').css('display', 'none');
  }
  // end func to change the img when resizing







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


  });
//                                                                'the end sweety'

