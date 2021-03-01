// Set button to click.
var button = document.getElementById( 'menu-toggle' );
const navUl = document.getElementById('nav-ul');
const left = document.getElementById('leftspan')

// Click the button.
button.onclick = function() {
	
  // Toggle class "opened". Set also aria-expanded to true or false.
  if ( -1 !== button.className.indexOf( 'opened' ) ) {
    button.className = button.className.replace( ' opened', '' );
    button.setAttribute( 'aria-expanded', 'false' );
    navUl.classList.toggle('show')
    left.classList.toggle('white-text')

  } else {
     button.className += ' opened';
    button.setAttribute( 'aria-expanded', 'true' );
    navUl.classList.toggle('show')
    left.classList.toggle('white-text')
   }
    
 };



 let x = window.matchMedia("(min-width: 1200px)")



 window.addEventListener('resize', (e) => {
    if(x.matches){
      navUl.classList.remove('show');
      left.classList.remove('white-text')
      button.className = button.className.replace( ' opened', '' );
      
    }
 });



//  Animation



gsap.from('.left-text', {opacity: 0, duration: 1, x: -200, ease: 'Power2.easeInOut'});
gsap.from('.right-img', {opacity: 0, duration: 1, x: 200, ease: 'Power2.easeInOut'});


gsap.from('.tech-icons', {
    scrollTrigger: '.tech-icons',
    opacity: 0, duration: 1.5, ease: 'Power2.easeInOut'
});

