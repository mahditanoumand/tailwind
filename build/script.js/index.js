const btn = document.querySelector('button.mobile-menue-button');
const menue = document.querySelector('.mobile-menue')
//add events
btn.addEventListener('click',()=>{
    menue.classList.toggle("hidden")
});
