(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Stellar
  $(window).stellar();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});



	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: false,
    stagePadding: 0,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    dots: false,
    autoplayHoverPause: false,
    items: 3,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

  // cusotm owl navigation events
  $('.custom-next').click(function(event){
    event.preventDefault();
    // majorCarousel.trigger('owl.next');
    majorCarousel.trigger('next.owl.carousel');

  })
  $('.custom-prev').click(function(event){
    event.preventDefault();
    // majorCarousel.trigger('owl.prev');
    majorCarousel.trigger('prev.owl.carousel');
  })

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});

	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	const $postsList = $('#postsList');
	if($postsList.length) {
    const pagination = {
      initialized: false,
      totalResults: 0,
      itemsPerPage: $postsList.attr('data-numItems') ? $postsList.attr('data-numItems') : 10,
      defaultOpts: {
        totalPages: 1,
        first: null,
        last: null,
        prev: '<',
        next: '>',
        prevClass: 'page-item',
        nextClass: 'page-item',
        pageClass: 'page-item'
      }
    };

    const searchParams = new URLSearchParams(window.location.search);
    let category = searchParams.get('id');

    const source = $('#post-results-template').html();
    const template = Handlebars.compile(source);

    const getPosts = (page = 0) => {
      $postsList.empty();
      $('#postsPagination').hide();

      const params = {
        start: page * pagination.itemsPerPage,
        rows: pagination.itemsPerPage,
      };

      if (category) {
        params.categories = category;
      }

      const categories = $postsList.attr('data-categories') ?
        $postsList.attr('data-categories').split(',') :
        null;

      if (categories) {
        params.categories = categories;
      }

      const exclude = $postsList.attr('data-exclude') ?
        $postsList.attr('data-exclude') :
        null;

      if (exclude) {
        params.exclude = exclude;
      }

      $.get('/api/posts.json', params).done(function(data) {
        pagination.totalResults = typeof data.total === 'object' ? data.total.value : data.total;

        if (data.hits === null) {
          data.hits = [];
        }

        const results = data.hits.map((result) => {
          let date = new Date(result.lastModifiedDate).toLocaleDateString("en-US",
            { month: 'short', day: 'numeric', year: 'numeric' });

          return {
            url: result.url,
            headline: result.headline,
            mainImage: result.mainImage,
            authorName: result.authorBio.item.component.name_s,
            authorImage: result.authorBio.item.component.profilePic_s,
            lastModifiedDate: date,
            categories: result.categories.item
          }
        });

        const html = template({ results });
        $postsList.append(html);

        const totalPages = Math.ceil(pagination.totalResults/pagination.itemsPerPage);
        if (!pagination.initialized && totalPages > 1) {
          $('#postsPagination').show();
          $('#postsPagination').twbsPagination({
            ...pagination.defaultOpts,
            totalPages: totalPages,
            onPageClick: function(evt, page) {
              getPosts(page -1);
            }
          })
        }
      });
    }

    getPosts();
  }


})(jQuery);