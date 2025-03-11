/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const BLURHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', BLURHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_2wyznju','template_i5vddfh','#contact-form','WFZKzDj0RdbHwhhzv')
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent =''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'

        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

document.addEventListener('DOMContentLoaded', function() {
    // Check if localStorage is available
    function isLocalStorageAvailable() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch(e) {
            return false;
        }
    }
    
    // Initialize counters
    let desktopCount = 0;
    let mobileCount = 0;
    let totalCount = 0;
    
    // Load previous counts if available
    if (isLocalStorageAvailable()) {
        desktopCount = parseInt(localStorage.getItem('desktopCount') || 0);
        mobileCount = parseInt(localStorage.getItem('mobileCount') || 0);
        totalCount = parseInt(localStorage.getItem('totalCount') || 0);
    }
    
    // Detect device type and increment appropriate counter
    function incrementCounter() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            mobileCount++;
            localStorage.setItem('mobileCount', mobileCount);
        } else {
            desktopCount++;
            localStorage.setItem('desktopCount', desktopCount);
        }
        
        totalCount = desktopCount + mobileCount;
        localStorage.setItem('totalCount', totalCount);
        
        updateDisplay();
    }
    
    // Update the counter display
    function updateDisplay() {
        document.getElementById('desktopCount').textContent = desktopCount;
        document.getElementById('mobileCount').textContent = mobileCount;
        document.getElementById('totalCount').textContent = totalCount;
    }
    
    // Initialize display
    updateDisplay();
    
    // Increment counter on page load
    incrementCounter();
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: true //Animations repeat
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card, .services__card`, {interval: 100})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toDateString();
    document.getElementById("clock").innerText = time + " | " + date;
  }
  
  setInterval(updateClock, 1000);
  
  function openPopup() {
    document.getElementById("loginPopup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
  }
  
  function toggleNav() {
    const nav = document.getElementById("thirdNavbar");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }
  
  const toggleNavButton = document.getElementById("toggleNavButton");
  const thirdNavbar = document.getElementById("thirdNavbar");
  
  function handleNavToggle() {
    if (window.innerWidth <= 768) {
      toggleNavButton.style.display = "block";
      thirdNavbar.style.display = "none";
    } else {
      toggleNavButton.style.display = "none";
      thirdNavbar.style.display = "block";
    }
  }
  
  window.addEventListener("resize", handleNavToggle);
  handleNavToggle();

