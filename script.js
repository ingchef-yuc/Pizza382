let pedido = [];

function agregarPedido(producto, precio) {
  pedido.push({ producto, precio });
  mostrarPedido();
}

function mostrarPedido() {
  let texto = pedido.map(p => `${p.producto} - $${p.precio}`).join("\n");
  document.getElementById('pedido').value = texto;
}

function enviarWhatsApp(e) {
  e.preventDefault();
  let nombre = document.getElementById('nombre').value;
  let direccion = document.getElementById('direccion').value;
  let mensaje = `Hola, soy ${nombre}. Quiero pedir:\n${pedido.map(p => `- ${p.producto} $${p.precio}`).join("\n")}\nDirección: ${direccion}`;
  window.open(`https://wa.me/5219990000000?text=${encodeURIComponent(mensaje)}`);
}

