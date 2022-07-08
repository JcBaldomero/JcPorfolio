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
  strings: ["Front-end Developer","Video Editor"," Graphic Designer"],
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
            
            