var slider = tns({
  container: '.my-slider',
  slideBy: 'page',
  mode: 'gallery',
  // autoplay: true,
  nav: false,
  controlsContainer: '.carousel-control',
  prevButton: '.prev-btn',
  nextButton: '.next-btn',
  // autoplayText: [
  //   '<button class="start-btn" type="button"></button>',
  //   '<button class="stop-btn" type="button"></button>',
  // ],
  // autoplayPosition: 'bottom',
});

var slider2 = tns({
  container: '.recom-slider',
  slideBy: 'page',
  axis: 'recom',
  // autoplay: true,
  nav: false,
  controls: false,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
});

var slider3 = tns({
  container: '.my-slider3',
  slideBy: 'page',
  mode: 'carousel',
  nav: false,
  controlsContainer: '.service-box .carousel-control',
  prevButton: '.service-box .prev-btn',
  nextButton: '.service-box .next-btn',
});
