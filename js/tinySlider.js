var visualCarousel = tns({
  container: '.visual-carousel .visual-carousel-slider',
  slideBy: 'page',
  mode: 'gallery',
  autoplay: true,
  nav: false,
  controlsContainer: '.visual-carousel .visual-carousel-control',
  prevButton: '.visual-carousel-control .prev-btn',
  nextButton: '.visual-carousel-control .next-btn',
  autoplayButton: '.visual-carousel-control .visual-carousel-auto',
  // center: true,
  // fixedWidth: 1920,
});

var recomCarousel = tns({
  container: '.recom-carousel-slider',
  slideBy: 'page',
  axis: 'recom',
  autoplay: true,
  nav: false,
  controls: false,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
});

var serviceCarousel = tns({
  container: '.service-carousel-slider',
  slideBy: 'page',
  mode: 'carousel',
  controlsContainer: '.service-box .carousel-control',
  prevButton: '.service-box .prev-btn',
  nextButton: '.service-box .next-btn',
  navAsThumbnails: true,
  navContainer: '.carousel-nav',
  arrowKeys: true,
});

var serviceCarouselSm = tns({
  container: '.service-carousel-slider-sm',
  slideBy: 'page',
  mode: 'carousel',
  controlsContainer: '.service-box .carousel-control',
  prevButton: '.service-box .prev-btn',
  nextButton: '.service-box .next-btn',
  navAsThumbnails: true,
  navContainer: '.carousel-nav',
  arrowKeys: true,
});

var newsCarousel = tns({
  container: '.news-carousel-slider',
  slideBy: 'page',
  mode: 'carousel',
  autoplay: true,
  nav: false,
  controlsContainer: '.news-carousel-control',
  prevButton: '.news-carousel-control .prev-btn',
  nextButton: '.news-carousel-control .next-btn',
  autoplayButton: '.news-carousel-control .news-carousel-auto',
});

var channelCarousel = tns({
  container: '.channel-carouel-slider',
  slideBy: 'page',
  mode: 'carousel',
  items: 5,
  gutter: 10,
  // edgePadding: 20,
  nav: false,
  controlsContainer: '.commu-channel .carousel-control',
  prevButton: '.commu-channel .prev-btn',
  nextButton: '.commu-channel .next-btn',
});
