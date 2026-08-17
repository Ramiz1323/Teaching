let img = document.querySelector('img');
let i = document.querySelector('.ri-heart-3-fill');

img.addEventListener('dblclick', () => {
    console.log('Liked');
    i.style.opacity = 1;
    i.style.transform = 'translate(-15%, -15%) scale(1) rotate(0deg)';

    setTimeout(() => {
        i.style.opacity = 0;
        i.style.transform = 'translate(0%, -300%) scale(0) rotate(20deg)';
    }, 700);
    setTimeout(() => {
        i.style.transform = 'translate(0%, 0%) scale(0) rotate(-90deg)';
    }, 900);

});