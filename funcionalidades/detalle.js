const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const producto = productos.find(p => p.id === id);

document.getElementById('disponibles').textContent = producto.cantidad;