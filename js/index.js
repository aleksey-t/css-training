import './components/burger-menu';

const popup = document.querySelector('.popup')

const showPopup = text => {
    popup.innerHTML = text;
    popup.classList.add('visible');
    setTimeout(hidePopup, 1000);
};

const hidePopup = text => {
    popup.classList.remove('visible');
};

if (document.querySelector('.home-h1')) {
    document.querySelector('.home-h1').addEventListener('click', () => {
        showPopup('Вы уже на главной');
    });
}
