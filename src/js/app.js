
$(document).ready(function(){

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;    
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');    
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
    
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
    
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    
    var $listItems = $list.children('li');
    
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
    
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
    });

// BLOG SLIDER
$('.blogsmb').owlCarousel({
    center: false,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            nav:true
            },
        600:{
            items:3,
            nav:false
            },
        1000:{
            items:4, 
            nav:false          
            }
        }
    });
//DATA COUNT
var a = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({
        countNum: $this.text()
        }).animate({
            countNum: countTo
        },
        {    
            duration: 2000,
            easing: 'swing',
            step: function() {
            $this.text(Math.floor(this.countNum));
            },
            complete: function() {
            $this.text(this.countNum);
            //alert('finished');
            }
        });
    });
    a = 1;
    }
});
//TESTIMONIALS
"use strict";
//  TESTIMONIALS CAROUSEL HOOK
$('#client-speak').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
});
$('.features-carousel').owlCarousel({
    autoplay: true,    
    loop: true,
    nav: true,
    items: 1,
    
  });
  
//
$(".sexytabs").tabs({ 
        show: { effect: "slide", direction: "left", duration: 200, easing: "easeInSine" } ,
        hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" } 
         });
});
    