document.addEventListener('scroll',(e)=>{

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 100) document.querySelector('.scroll').style.display = "block";
    else document.querySelector('.scroll').style.display = "none"
})
function animateToTop(e) {
    e.preventDefault();
    let scrollToTop = window.setInterval(function() {
        let pos = window.pageYOffset;
        if ( pos > 0 && pageYOffset >= 10) {
            window.scrollTo(0, pos - 20);
            document.querySelector('.scrolimg').style.visibility = 'visible';
        } else {
            window.clearInterval(scrollToTop);
            document.querySelector('.scrolimg').style.visibility = 'visible';
        }
    }, 
    9
    )
}