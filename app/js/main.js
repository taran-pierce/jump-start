window.addEventListener("DOMContentLoaded", function() {
  //console.log('we got DOMContentLoaded');
});

// returns isMobile true/false
let checkDeviceWidth = function() {
  let width = window.innerWidth;
  let isMobile = false;

  if ( width < 768 ) {
    isMobile = true;
  }
  
  return isMobile;
}

// check size before starting gallery
isMobile = checkDeviceWidth();

let gallery = new Siema({
  selector: '.image-gallery',
  duration: 200,
  easing: 'ease-in-out',
  perPage: ( isMobile ? 1 : 3),
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


////////////////////
// Photo Gallery
// creates lightbox links for gallery
////////////////////

let galleryLinks = document.querySelectorAll('.gallery-link');
let modal = document.getElementById('gallery-lightbox');

for (let link of galleryLinks) {
  let href = link.pathname;
  let image = '<img class="img-responsive" src="' + href + '" alt="test">';
  
  // on click insert image into modal
  link.addEventListener('click', function( e ) {
    e.preventDefault();
    // it uses a bootstrap modal
    // might as well use jQuery
    let $modal = $(modal);
    
    $modal.find('.modal-body').empty().append( image );
    $modal.modal('toggle');
  });
}