var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    720: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    990: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1240: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

//

var swiper = new Swiper(".asd", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 0,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    // when window width is >= 480px
    720: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    // when window width is >= 640px
    990: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    1240: {
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
  },
});

let thumbnails = document.getElementsByClassName("thumbnail");

let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", function () {
    console.log(activeImages);

    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}

//   let buttonRight = document.getElementById('slideRight');
//   let buttonLeft = document.getElementById('slideLeft');

//   buttonLeft.addEventListener('click', function(){
//     document.getElementById('slider').scrollLeft -= 180
//   })

// buttonRight.addEventListener('click', function () {
//   document.getElementById('slider').scrollLeft += 180
// });
$(function () {
  $("[data-decrease]").click(decrease);
  $("[data-increase]").click(increase);
  $("[data-value]").change(valueChange);
});

function decrease() {
  var value = $(this).parent().find("[data-value]").val();
  if (value > 1) {
    value--;
    $(this).parent().find("[data-value]").val(value);
  }
}

function increase() {
  var value = $(this).parent().find("[data-value]").val();
  if (value < 100) {
    value++;
    $(this).parent().find("[data-value]").val(value);
  }
}

function valueChange() {
  var value = $(this).val();
  if (value == undefined || isNaN(value) == true || value <= 0) {
    $(this).val(1);
  } else if (value >= 101) {
    $(this).val(100);
  }
}

// 

var swiper = new Swiper('.brandslider', {
  slidesPerView: 6,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    720: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    990: {
      slidesPerView: 5,
    },
    1240: {
      slidesPerView: 6,
    },
  },
});

// 

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});