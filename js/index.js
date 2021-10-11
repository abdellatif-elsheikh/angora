// Sellect color input 
const c = document.querySelector('#color');
// Select all navbar items
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(navLink => {
    navLink.addEventListener('click', e => {
        navLinks.forEach(navItem => {
            if(navItem === e.target){
                navItem.classList.add('active')
            }else {
                navItem.classList.remove('active')
            }
        })
    })
})

// fade out the looding screen
$(window).on('load', function () {
    $('#spinner').fadeOut('slow', function () {
        $('#body').removeClass('hidden')
    });
})
// function to change color based on user choise
c.addEventListener('input', ()=> {
    let hexColor = c.value;
    let red = parseInt(hexColor[1]+hexColor[2],16);
    let green = parseInt(hexColor[3]+hexColor[4],16);
    let blue = parseInt(hexColor[5]+hexColor[6],16);
    let rgbColor = `${red}, ${green}, ${blue}`
    document.documentElement.style.setProperty('--main-red', hexColor);
    document.documentElement.style.setProperty('--main-red-val', rgbColor);
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight /2
    );
}
const sections = document.querySelectorAll('section');

// dinamicly activ the right link
window.onscroll = ()=>{
    sections.forEach(section=>{

        // console.log(isInViewport(section));
        if(isInViewport(section)){
            navLinks.forEach(navLink => {
                const referLink = navLink.getAttribute('href').slice(1);
                const itSection = section.getAttribute('id')
                if (referLink === itSection)
                    navLink.classList.add('active')
                else
                    navLink.classList.remove('active')
                console.log();
            })
        }

    })
}
