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
