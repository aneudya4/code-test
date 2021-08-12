const init = () => {
    const LightenDarkenColor = (color, amount) => {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));


        // generates a color lighter(positive amount) or darker(negative amount) by amount
    };

    const toggleNavBarHandler = (event) => {
        event.target.nextElementSibling.classList.toggle('show-nav');
    };

    const btnClickHandler = (event) => {
        event.target.innerText = 'clicked!';
        event.target.classList.add('clicked');
    };

    const bntMouseInEffect = (event) => {
        event.target.style.backgroundColor = LightenDarkenColor('#008bff', -20);
    };

    const btnMouseOutEffect = (event) => {
        if (event.target.classList.contains('clicked')) {
            event.target.style.backgroundColor = '#eee';
        } else {
            event.target.style.backgroundColor = '#008bff';
        }
    };

    const clickMebtn = document.querySelector('#p4-button-wrapper a ');
    const dropdownBtn = document.querySelector('#p3-button');

    dropdownBtn.addEventListener('click', toggleNavBarHandler);
    clickMebtn.addEventListener('click', btnClickHandler);
    clickMebtn.addEventListener('mouseover', bntMouseInEffect);
    clickMebtn.addEventListener('mouseleave', btnMouseOutEffect);
};

window.addEventListener('DOMContentLoaded', (event) => {
    init();
});
