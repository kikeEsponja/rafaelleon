const lista = document.getElementById('lista-productos');
function mostrarProductos(){
    let html = "";

    productos.forEach(prod =>{
        html += `
        <div class="boton_mmgv">
            <a href="${prod.direcc}?id=${prod.id}"><img src="${prod.imagen}"></a>
            <h4>${prod.nombre}</h4>
            <p>Código ${prod.codigo}</p>
            <div>
                <h6 class="precio_online">PRECIO ONLINE</h6>
                <h2> S/ ${prod.precio}</h2>
            </div>
            <p>Precio regular</p>
            <p>Precio: S/ ${prod.precio}</p>
            <hr>
            <button class="add-car agregar_al_carro_item" data-id="${prod.id}">Agregar al carro</button>
        </div>
        `;
    });
    lista.innerHTML = html;
}

mostrarProductos();

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let click = 0;

document.addEventListener('click', e =>{
    if(e.target.classList.contains('add-car')){
        const id = parseInt(e.target.dataset.id);

        const producto = productos.find(p => p.id === id);

        const existente = carrito.find(p => p.id === id);

        if(existente){
            existente.cantidad++;
        }else{
            carrito.push({...producto, cantidad: 1});
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('añadido');
        click = click + 1;
        let compras = document.getElementById('compras');
        compras.textContent = click;
    }
});