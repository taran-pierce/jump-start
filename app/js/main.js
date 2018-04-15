window.addEventListener("DOMContentLoaded", function() {
  //console.log('we got DOMContentLoaded');
});

var gallery = new Siema({
  selector: '.image-gallery',
  duration: 200,
  easing: 'ease-in-out',
  perPage: 3,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {
    console.log('onInit');
  },
  onChange: () => {
    console.log('onChange!');
  },
});

// navigation for gallery
document.querySelector('.prev').addEventListener('click', () => gallery.prev() );
document.querySelector('.next').addEventListener('click', () => gallery.next() );