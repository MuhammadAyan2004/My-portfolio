import './style.css'
  const block3 = document.querySelector(".block-3");
  const block4 = document.querySelector(".block-4");
  const block5 = document.querySelector(".b-1");
  const block6 = document.querySelector(".b-2");
  const block7 = document.querySelector(".b-3");
  const block8 = document.querySelector(".b-4");
  const block9 = document.querySelector(".b-5");
  const about = document.querySelector("#about")
  const links = document.querySelector("#social-links")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        block3.classList.add("animate-left");
        block4.classList.add("animate-right");
        block5.classList.add("animate-left");

      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(about);

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        block5.classList.add("animate-left");
        block6.classList.add("animate-right");
        block7.classList.add("animate-left");
        block8.classList.add("animate-right");
        block9.classList.add("animate-left");

      }
    });
  }, {
    threshold: 0.3
  });

  observer2.observe(links);
