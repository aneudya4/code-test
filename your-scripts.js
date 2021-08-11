const toggleNavBar = () => {
    const dropdownBtn = document.querySelector('#p3-button')

    dropdownBtn.addEventListener('click', (event) => {

        document.querySelector('nav').classList.toggle('show-nav')

    })
}



const changeBtn = () => {
    const clickMebtn = document.querySelector('#p4-button-wrapper a ')
    clickMebtn.addEventListener('click', (event) => {
        event.target.classList.add('stop-hover')
        // PREVENTS the hover effect to make button 20% darker after clicked, REMOVE IF NOT DESIRED BEHAVIOUR 
        event.target.innerText = 'clicked!'
        event.target.style.backgroundColor = '#eee'
        event.target.style.color = 'black'

    })

}



window.addEventListener('load', (event) => {
    toggleNavBar();
    changeBtn();
    // run functions on  page load 
});
