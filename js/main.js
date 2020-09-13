// toggle hamburger menu

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navList = document.querySelector('.nav-list');


hamburgerIcon.addEventListener('click', () => {
    if(navList.style.top !== '0vh'){
        // show close icon
        hamburgerIcon.classList.add('close-icon');

        navList.style.top = '0vh';
    }else{
        // remove close icon
        hamburgerIcon.classList.remove('close-icon');
        
        navList.style.top = '-30vh';
    }
});


// AOS Config
AOS.init({
    duration: 500
});

// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});
