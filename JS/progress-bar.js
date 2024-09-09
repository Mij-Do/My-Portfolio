document.addEventListener('scroll', function() {
    const progressContainer = document.querySelector('.card-body .container');
    const progressBar = document.getElementById('progressBar');
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const progressContainerTop = progressContainer.getBoundingClientRect().top + scrollTop;

    if (scrollTop + windowHeight > progressContainerTop) {
        progressContainer.style.display = 'block';

        // Simulate progress (you can update this based on actual progress if needed)
        let progress = (scrollTop / (document.documentElement.scrollHeight - windowHeight)) * 0;
        progressBar.style.width = progress + '%';
    }
});
