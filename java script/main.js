const productos = [
  { id: 1, nombre: 'Producto 1', precio: 1000 },
  { id: 2, nombre: 'Producto 2', precio: 2000 },
  { id: 3, nombre: 'Producto 3', precio: 3000 },
  { id: 4, nombre: 'Producto 4', precio: 4000 },
  { id: 5, nombre: 'Producto 5', precio: 5000 },
];

function mostrarProductos(productos) {
  const lista = document.getElementById('productos');
  lista.innerHTML = '';

  productos.forEach(producto => {
    const item = document.createElement('li');
    item.innerText = `${producto.nombre} - $${producto.precio}`;
    lista.appendChild(item);
  });
}

function buscarProductos() {
  const busqueda = document.getElementById('busqueda').value.toLowerCase();
  const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));
  mostrarProductos(productosFiltrados);
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  buscarProductos();
});

