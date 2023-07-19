// // Counter Up //

window.addEventListener('load', startCounting);
// window.addEventListener('load', handleScroll);

function startCounting() {
  // console.log('startCounting() called');
  var counter1 = document.getElementById("counter1");
  var counter2 = document.getElementById("counter2");
  var counter3 = document.getElementById("counter3");

  var duration = 2000; // Duration of the animation in milliseconds
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;

  function animateCount(counter, finalCount, count) {
    var increment = finalCount / (duration / 50); // Increment the count every 50ms
    count += increment;
    if (count > finalCount) {
      count = finalCount;
    }
    counter.textContent = Math.round(count).toLocaleString();
    if (count < finalCount) {
      setTimeout(function() {
        animateCount(counter, finalCount, count);
      }, 50);
    }
  }

  function handleScroll() {
    var base = counter1.parentElement.offsetTop
    var start = base + 0.8 * counter1.offsetHeight - window.innerHeight;
    var end = base + 0.2 * counter1.offsetHeight - 80;
    // console.log(window.innerHeight, window.scrollY, counter1.parentElement.offsetTop, counter1.offsetHeight)
    if (window.scrollY > start && window.scrollY < end) {
      counter1.style.visibility = "visible";
      animateCount(counter1, parseInt(counter1.dataset.count), count1);
      counter2.style.visibility = "visible";
      animateCount(counter2, parseInt(counter2.dataset.count), count2);
      counter3.style.visibility = "visible";
      animateCount(counter3, parseInt(counter3.dataset.count), count3);
      window.removeEventListener("scroll", handleScroll);
      }
    }
  window.addEventListener("scroll", handleScroll);
}

//Swiper

var swiper = new Swiper(".mySwiper", {

  spaceBetween: 20,
  loop: true,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});
