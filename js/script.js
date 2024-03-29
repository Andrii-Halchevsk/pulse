$(document).ready(function(){
  // Slider
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  // Tabs
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
  $('.overlay, #consultation, #order, #thanks').fadeOut('slow'); 
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

 // Valide

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер",
        email: {
          required: "Пожалуйста, введите адрес почты",
          email: "Неправильно введен адрес почты, пример: example@gmail.com "
        }
      }
    });
  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  // Mask
  $('input[name=phone]').mask("+3 (999) 999-99-99");

  // Sending letter
  $('form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

  //Smooth scroll and page up

  $(window).scroll(function() {
  if ($(this).scrollTop() > 1500) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
  });

  // Setup wow.js
  
  new WOW().init();
});



/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron_right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: false,
                dots: true
              }
            }
        ]
    });
}); */

//let number = 7;
//const pi = 3.14;

//number = 4;

//let leftBorderWidth = 200;

// number 
// string - "", '', `` (строка)
// true, false (булеве значення, логічний тип даних)
// null (элемента не существует)
// undefined (что то существует, но значения никакого не имеет )

// let obj = {
//   name: 'apple'
//   color: 'green'
//   weight: 200
//}

//Symbol
//alert (1234)

//console.log(number);
//let answer = confirm ("Вам есть 18?");
//console.log(answer);

//let answer = prompt ("Вам есть 18?", "");
//console.log(answer);

//console.log(4+4);
//console.log(4 + 'add string');

//let isCheked = true,
//    isClose = true;
//console.log(isCheked && isClose); виконаэться якщо то и то буде правда
//console.log(isCheked || isClose); чи перша чи друга буде правда 

//let answer = confirm ("You are 18 years old?")   \\умова\\
//if (answer) {
//    console.log('welcome')
//} else {
//    console.log('get out')
//}

//for (let i = 1; i < 8; i++) {     \\цикли\\
//    console.log(i);
//}

//function logging(a, b) {  \\функції\\
//    console.log(a + b)
//}

//logging (3,5)
//logging (8,12)