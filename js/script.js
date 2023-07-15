document.addEventListener("DOMContentLoaded", function () {
    let target = document.querySelector("#secondSection");
    let body = document.querySelector("html");
    let options = {
      threshold: 0
    };
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          body.classList.add("bg-black");
        } else {
          body.classList.remove("bg-black");
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });

window.addEventListener('scroll', function() {
  let section = document.querySelector('section');
  let text = document.querySelector('.outText');
  let innerText1 = document.querySelector('.innerText1');
  let innerText2 = document.querySelector('.innerText2');
  let value = window.scrollY;

  // Define a threshold value
  let threshold = 10; // Adjust this value to set the desired threshold

  if (value > threshold) {
    innerText1.style.left = 0 - (value - threshold) / 100 + '%';
    innerText2.style.left = (value - threshold) / 100 + '%';
  } else {
    // Reset the positions when below the threshold
    innerText1.style.left = '0';
    innerText2.style.left = '0';
  }
});

document.addEventListener("DOMContentLoaded", function () {
let target = document.querySelector("#boxImage");
let img1 = document.querySelector(".img-1");
let options = {
    threshold: 0.5 // Adjust the threshold value as needed
};
let callback = (entries, observer) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        img1.style.transform = "scale(1)";
    } else {
        img1.style.transform = "scale(0) rotate(100deg)";
    }
    });
};
let observer = new IntersectionObserver(callback, options);
observer.observe(target);
});


  

  
