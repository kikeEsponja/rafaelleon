const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
let inicio = document.getElementById('logo');

/*inicio.style.cursor = 'pointer';
inicio.addEventListener('click', () =>{
    window.location.href = '../index.html';
});*/

if(btn){
    btn.addEventListener('click', ()=>{
        menu.classList.toggle('hidden');
    });
}

if(menu){
    menu.addEventListener('click', (e)=>{
        if(e.target === menu) menu.classList.add('hidden');
    });
}
//-------------------------------CARRITO---------------------------------------------------
let agregarCarrito = document.getElementById('agregar-carrito');
let compras = document.getElementById('compras');
let carrito =  document.getElementById('carrito');
let contador = 0;

let addCar = document.getElementById('add-car');
addCar.addEventListener('click', () =>{
    contador = contador + 1;
    compras.textContent = contador;
});

carrito.addEventListener('click', () => {
    if(contador > 0){
        window.location.href = './vistas/carrito.html';
    }else{
        alert('agrega un producto');
    }
    
});