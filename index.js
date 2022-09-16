

const nav=document.querySelector('.nav-list')
const btn=document.getElementById('burger');
btn.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
})