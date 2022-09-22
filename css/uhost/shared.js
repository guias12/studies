const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalNoButton = document.querySelector('.modal__actions button')
const selectPlanButton = document.querySelectorAll('.plan button')
const mobileNav = document.querySelector('.mobile-nav')
const toggleButton = document.querySelector('.toggle-button')

if(selectPlanButton) {    
    selectPlanButton.forEach(button => {
        button.addEventListener('click', () => {
            // modal.style.display = 'block'
            // backdrop.style.display = 'block'
            //modal.className = 'open' //This will overwrite the class
            modal.classList.add('open')
            backdrop.classList.add('open')
        })
    });
}

if(modalNoButton) {
    modalNoButton.addEventListener('click', () => {
        closeModal()
    })
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')       
    closeModal()
})

function closeModal() {
    //modal.style.display = 'none'
    //backdrop.style.display = 'none'
    if(modal) modal.classList.remove('open')    
    backdrop.classList.remove("open");
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200);
}

toggleButton.addEventListener('click', () => {
    //mobileNav.style.display = 'block'
    //backdrop.style.display = 'block'
    mobileNav.classList.add('open')
    //backdrop.classList.add('open')
    backdrop.style.display = "block";
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 10);
})