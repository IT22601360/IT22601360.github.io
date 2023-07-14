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




  

  