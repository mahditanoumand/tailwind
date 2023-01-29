const btn = document.querySelector('.mobile-menue-button');
const sidebar = document.querySelector('.sidebar')
//add events
btn.addEventListener('click',()=>{
   sidebar.classList.toggle("-translate-x-full")
});
