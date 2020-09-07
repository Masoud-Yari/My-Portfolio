const hamburgerIcon = document.querySelector('.hamburger-icon');
const navList = document.querySelector('.nav-list');

hamburgerIcon.addEventListener('click', () => {
    if(navList.style.top !== '0vh'){
        
        navList.style.top = '0vh';
    }else{
        navList.style.top = '-30vh'
    }
});

