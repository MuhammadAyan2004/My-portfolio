import './style.css'

const block3 = document.querySelector(".block-3");
const block4 = document.querySelector(".block-4");
const block5 = document.querySelector(".b-1");
const block6 = document.querySelector(".b-2");
const block7 = document.querySelector(".b-3");
const block8 = document.querySelector(".b-4");
const block9 = document.querySelector(".b-5");


const home = document.querySelector("#home")
const about = document.querySelector("#about")
const skill = document.querySelector("#skill")
const folio = document.querySelector("#folio")
const contact = document.querySelector("#contact")
const links = document.querySelector("#social-links")
const sidediv = document.querySelector(".first-links")


const obs = new IntersectionObserver((enties) => {
    enties.forEach(entry => {
        sidediv.querySelectorAll("a").forEach(link => {
            link.style.color = "#F8F9FA";
            if (link.parentElement.tagName === "I"){
                link.parentElement.style.color = "#F8F9FA";
            }
        });
        const activelink = sidediv.querySelector(`a[href="#${entry.target.id}"]`);
        
        if (activelink) {
            activelink.style.color = "darkslateblue";
            if (activelink.parentElement.tagName === "I") {
                activelink.parentElement.style.color = "darkslateblue";
            }
        }
    }, { threshold: 0.3 })
})
obs.observe(folio)


const sections = [home, about, skill, contact, links];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {


      sidediv.querySelectorAll("a").forEach(link => {
        link.style.color = "#F8F9FA";
        if (link.parentElement.tagName === "I") {
          link.parentElement.style.color = "#F8F9FA";
        }
      });

      const activelink = sidediv.querySelector(`a[href="#${entry.target.id}"]`);
      if (activelink) {
        activelink.style.color = "darkslateblue";
        if (activelink.parentElement.tagName === "I") {
          activelink.parentElement.style.color = "darkslateblue";
        }
      }

      // Optional animation blocks
      if (entry.target.id === "about") {
        block3.classList.add("animate-left");
        block4.classList.add("animate-right");
        block5.classList.add("animate-left");
      }

      if (entry.target.id === "social-links") {
        block5.classList.add("animate-left");
        block6.classList.add("animate-right");
        block7.classList.add("animate-left");
        block8.classList.add("animate-right");
        block9.classList.add("animate-left");
      }
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section)
});




let text = document.querySelector(".changing-text")
let arr = ["Programer", "Frontend Developer", "Freelancer"];
let wordindex = 0;
let charindex = 0;
let isDeleting = false;

function typeWriter() {
    let currentword = arr[wordindex]
    if (isDeleting) {
        charindex--
    } else {
        charindex++
    }

    text.textContent = currentword.substring(0, charindex)

    if (!isDeleting && charindex === currentword.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charindex === 0) {
        isDeleting = false
        wordindex = (wordindex + 1) % arr.length
    }
    setTimeout(typeWriter, isDeleting ? 100 : 200)
}
typeWriter()


let menu = document.querySelector(".menu")
let sidebar = document.querySelector(".sidebar")
let close = `<i class="ri-close-fill"></i>`;
let m2 = `<i class="ri-menu-line"></i>`;

menu.addEventListener("click", () => {
    if (menu.innerHTML == m2) {
        sidebar.style.left = "20px"
        menu.innerHTML = close;
    } else if (menu.innerHTML == close) {
        sidebar.style.left = "-200vh"
        menu.innerHTML = m2;
    }
    sidebar.addEventListener("click",(e)=>{
        if(e.target.tagName === "A" || e.target.classList.contains("s")){
            sidebar.style.left = "-200vh"
            if(menu.innerHTML == close){
                menu.innerHTML = m2
            }
        }
    })
})

