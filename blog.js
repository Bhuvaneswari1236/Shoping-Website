const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const descriptionPreview = button.parentElement.querySelector('.description-preview');
        const descriptionFull = button.parentElement.querySelector('.description-full');

        if (descriptionPreview.style.display !== 'none') {
            descriptionPreview.style.display = 'none';
            descriptionFull.style.display = 'block';
            button.innerText = 'Read Less';
        } else {
            descriptionPreview.style.display = 'block';
            descriptionFull.style.display = 'none';
            button.innerText = 'Read More';
        }
    });
});
