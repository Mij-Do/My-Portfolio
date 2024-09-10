document.addEventListener('scroll', function() {
    const progressContainer = document.querySelector('.card-body .container');
    const progressBar = document.getElementById('progressBar');
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const progressContainerTop = progressContainer.getBoundingClientRect().top + scrollTop;

    if (scrollTop + windowHeight > progressContainerTop) {
        progressContainer.style.display = 'block';
        progressBar.style.width = progress + '%';
    }
});
