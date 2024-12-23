const openPopUp = document.getElementById('open__popup');
const closePopUp = document.getElementById('close__popup');
const popUp = document.getElementById('popup__bg');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    document.body.classList.add('locked');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.classList.remove('locked');
});

popUp.addEventListener('click', function(event) {
    if (event.target === popUp) {
        modal.style.display = 'none';
        document.body.classList.remove('locked');
    }
});