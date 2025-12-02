const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

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

//-------------------------------CONTADOR-----------------------------------------------------
let click = 0;
let contador = document.getElementById('cantidad_de_productos');
let numDisp = 6;

let contadorDisp = document.getElementById('disponibles');
contadorDisp.textContent = numDisp;

let botonResta = document.getElementById('resta');
botonResta.setAttribute('disabled', null);
botonResta.addEventListener('click', function(){
	click = click - 1;
	contador.textContent = click;
    numDisp = numDisp + 1;
    contadorDisp.textContent = numDisp;
    if(numDisp === 6){
        botonResta.setAttribute('disabled', null);
        botonSuma.removeAttribute('disabled', null);
    }
});

let botonSuma = document.getElementById('suma');
botonSuma.addEventListener('click', function(){
	click = click + 1;
	contador.textContent = click;
    numDisp = numDisp - 1;
    contadorDisp.textContent = numDisp;
    if(numDisp === 0){
        botonSuma.setAttribute('disabled', null);
        botonResta.removeAttribute('disabled', null);
    }
});
//-------------------------------CARRITO---------------------------------------------------
let agregarCarrito = document.getElementById('agregar-carrito');
agregarCarrito.addEventListener('click', function(){
    window.location.href = './carrito.html';
})