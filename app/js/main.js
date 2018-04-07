console.log('is this thing on?');

window.addEventListener("DOMContentLoaded", function() {
  console.log('we got DOMContentLoaded');
});

var gallery = new Siema({
  selector: '.image-gallery',
  duration: 200,
  easing: 'ease-in-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrage: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {
    console.log('onInit');
  },
  onChange: () => {
    console.log('onChange!');
  },
});

// GM Key: AIzaSyDOtUaGuS_0BsqEpfUPkNVxYdihgtihOhY