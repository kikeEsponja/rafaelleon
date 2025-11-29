const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
});

menu.addEventListener('click', (e)=>{
    if(e.target === menu) menu.classList.add('hidden');
});