window.addEventListener('scroll', function() {
const image = document.getElementById('myImage');
if (window.scrollY > 200) {  // the value of hidden
    image.style.opacity = 0;
} else {
    image.style.opacity = 1;
}
});