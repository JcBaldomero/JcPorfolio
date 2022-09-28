  // navbar icon toggle
  function toggleBtn() {
      let nav = document.querySelector(".navlink-container");
      nav.classList.toggle("open");
  }


//gives alert when user dl C
  function downloadStart(){
    alert('Download Curriculum vitae?');
  }





//gallery function

const panels = document.querySelectorAll('.panel');



function toggleActive() {
  this.classList.toggle('open');
} 

function toggleShow(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('color')) {
    this.classList.toggle('open-active');
  }
}


panels.forEach(panel => panel.addEventListener('click', toggleActive));
panels.forEach(panel => panel.addEventListener('transitionend', toggleShow));





// Typewriter Function
var typed = new Typed(".typing",{
  strings: ["Front-End Developer","Video Editor"," Graphic Designer"],
  typeSpeed: 120,
  bacSpeed: 11,
  loop: true
 })





  

// Scroll animation 

          
            // Detect request animation frame
            var scroll = window.requestAnimationFrame ||
            // IE Fallback
            function(callback){ window.setTimeout(callback, 1000/60)};
            var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
            
            function loop() {
            
            Array.prototype.forEach.call(elementsToShow, function(element){
            if (isElementInViewport(element)) {
            element.classList.add('is-visible');
            } else {
            element.classList.remove('is-visible');
            }
            });
            
            scroll(loop);
            }
            
            // Call the loop for the first time
            loop();
            
            // Helper function from: http://stackoverflow.com/a/7557433/274826
            function isElementInViewport(el) {
            // special bonus for those using jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
            }
            var rect = el.getBoundingClientRect();
            return (
            (rect.top <= 0
            && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
            }
            


// local projects data
// const projects = [
//   {
//     title:"Graphic design",
//     img:"https://jcbaldomero.github.io/JcPorfolio/images/SocialMedia/Breakfast.png",
//     description:"Graphic design projects using Canva and Premiere pro",
//     link:"https://jcbaldomero.github.io/JcPorfolio/Design.html",
//     linkName:"Graphic Design"
//   },
//   {
//     title:"Front-end Development",
//     img:"https://jcbaldomero.github.io/JcPorfolio/images/Projects/Websites/ValorantAccountWebsite.png",
//     description:"Websites I developed using tools like HTML5,CSS3,SASS and JavaScript",
//     link:"https://jcbaldomero.github.io/JcPorfolio/frontEnd.html",
//     linkName:"Front-End Development"
//   },
//   {
//     title:"Wordpress",
//     img:"https://jcbaldomero.github.io/JcPorfolio/images/Projects/Websites/BelisonWebsite.png",
//     description:"Websites I developed using Wordpress and Elementor page builder",
//     link:"https://jcbaldomero.github.io/JcPorfolio/wordpress.html",
//     linkName:"Wordpress"
//   },
//   {
//     title:"Certificates",
//     img:"https://jcbaldomero.github.io/JcPorfolio/images/Projects/certificates/ResponsiveWebdesign.png",
//     description:"Certificates from learning Front-end Web development and Graphic design through Coursera and FreeCodeCamp",
//     link:"https://jcbaldomero.github.io/JcPorfolio/Certificate.html",
//     linkName:"Certificates"
//   }
// ];
   

// // Projects functions
// const img = document.getElementById("banner-img");
// const title = document.getElementById("title");
// const text = document.getElementById("text");
// const link = document.getElementById("link");
// const linkName = document.getElementById("linkName");

// const prevBtn = document.querySelector(".prevbtn")
// const nextBtn = document.querySelector(".nextbtn")

// // starting value
// let currentItem = 0;



// // load initial value
// window.addEventListener("DOMContentLoaded", function(){
//   showProjects()
// })


// function showProjects(){
//   const value = projects[currentItem]
//   img.src = value.img;
//   title.textContent = value.title;
//   text.textContent = value.description;
//   link.href = value.link   
//   linkName.textContent =value.linkName; 
// }

// // buttons funtion

// nextBtn.addEventListener('click', function(){
//   currentItem++;
//   if(currentItem > projects.length -1){
//       currentItem = 0;
//   }
//   showProjects();
// })


// prevBtn.addEventListener('click', function(){
//   currentItem--;
//   if(currentItem < 0){
//       currentItem = projects.length -1;
//   }
//   showProjects();
// })