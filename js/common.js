$(function() {

	// Custom JS
	function heightDetect() {

		$("section").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});


$(document).ready(function() {



	$("#menu a, .top").mPageScroll2id({
		offset : 60
	});


  $('.info-text-list').addClass('wow fadeInDown');
  $('.info-text-btn').addClass('wow fadeInUp');
  $('.heading').addClass('wow fadeInDown');
  $('.advantages-item').addClass('wow zoomIn');
  $('.person-item').addClass('wow zoomIn');
  $('.portfolio-item').addClass('wow zoomIn');
  $('.material-item').addClass('wow zoomIn');
  $('.table').addClass('wow zoomIn');
  $('.map').addClass('wow zoomIn');
  $('.equipment-item').addClass('wow zoomIn');
  $('.timeline-item').addClass('wow zoomIn');

  $(".portfolio li").click(function() {
  	$(".portfolio li").removeClass("active");
  	$(this).addClass("active");
  });

  var mixer = mixitup('.mixit');

  $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  //closeBtnInside: true
  // Delay in milliseconds before popup is removed
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade'
  });

  $(".portfolio-item").each(function(i) {
	$(this).find("a").attr("href","#work_" + i);
	$(this).find(".portfolio-item-descr").attr("id","work_" + i);
	});

    //map
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [53.865372, 27.511220],
            zoom: 13
        });

        myPlacemark = new ymaps.Placemark([53.865372, 27.511220], { 
        	hintContent: 'Мы здесь!' },
                {
                    preset: "twirl#redStretchyIcon"
                });

        myMap.geoObjects.add(myPlacemark);
    }

});



$(window).on('load', function(){
$(".loaderInner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
});

