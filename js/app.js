let nombreUsuario = prompt("¿Cuál es tu nombre?").toLowerCase();

const verficadorDeNombres = () => {
  while (nombreUsuario.match(/[^a-z]/g)) {
    nombreUsuario = prompt(
      "El nombre no puede contener números ni caracteres especiales. ¿Cuál es tu nombre?"
    ).toLowerCase();
  }

  while (nombreUsuario == "") {
    nombreUsuario = prompt(
      "Lo Sentimos. No se permiten campos vacios. ¿Cuál es tu nombre?"
    ).toLowerCase();
  }

  while (nombreUsuario.length < 3) {
    nombreUsuario = prompt(
      "Ese no parece un nombre muy real... ¿Cuál es tu nombre real?"
    ).toLowerCase();
  }

  alert("Hola " + nombreUsuario + " Bienvenido a Posdata");
};

verficadorDeNombres();

alert("Vamos a conocernos un poco mas");

let edadUsuario = prompt(nombreUsuario + " ¿Cuál es tu edad?");

const verificadorDeEdad = () => {
  while (isNaN(edadUsuario)) {
    edadUsuario = prompt("Por favor ingrese un numero");
  }
  while (edadUsuario == "") {
    edadUsuario = prompt(
      "Lo Sentimos. No se permiten campos vacios. ¿Cuál es tu edad?"
    );
  }

  if (edadUsuario >= 18) {
    alert("Bienvenido a Posdata " + nombreUsuario);
  } else {
    alert(
      "Lo sentimos, no puedes realizar compras aqui si eres menor de edad. Trae a un adulto contigo la proxima vez"
    );
    location.reload();
    throw new Error("El usuario es menor de edad");
  }
};

verificadorDeEdad();

alert(
  `Estos son las tarjeta que tenemos disponibles ${nombreUsuario}. Por favor ingresa el numero de la tarjeta que desea comprar`
);

let catalogo = [
  {
    nombre: "Tarjeta de regalo para cumpleaños",
    precio: 10,
  },
  {
    nombre: "Tarjeta de regalo para aniversario",
    precio: 20,
  },
  {
    nombre: "Tarjeta de regalo para navidad",
    precio: 15,
  },
  {
    nombre: "Tarjeta de regalo para graduación",
    precio: 8,
  },
  {
    nombre: "Tarjeta de regalo para día de la madre",
    precio: 40,
  },
  {
    nombre: "Tarjeta de regalo para día del padre",
    precio: 30,
  },
  {
    nombre: "Tarjeta de regalo para san valentin",
    precio: 5,
  },
];

let carrito = [];

const imprimirCatalogo = () => {
  let catalogoString = "";
  for (let i = 0; i < catalogo.length; i++) {
    catalogoString += `${i} - ${catalogo[i].nombre} - $${catalogo[i].precio} \n`;
  }
  return catalogoString;
};

let productoElegido = prompt(imprimirCatalogo());

const verificadorDeProducto = () => {
  while (isNaN(productoElegido)) {
    alert("Por favor ingresa un numero");
    productoElegido = prompt(imprimirCatalogo());
  }
  while (productoElegido == "") {
    alert(
      "Lo Sentimos. No se permiten campos vacios. Por favor ingrese un numero"
    );
    productoElegido = prompt(imprimirCatalogo());
  }
  while (productoElegido < 0 || productoElegido > catalogo.length - 1) {
    alert(
      "Lo sentimos, ese producto no existe. Por favor ingrese un numero valido"
    );
    productoElegido = prompt(imprimirCatalogo());
  }
};

verificadorDeProducto();

carrito.push(catalogo[productoElegido]);
console.log(carrito);

alert(
  `${nombreUsuario} has elegido ${catalogo[productoElegido].nombre} por $${catalogo[productoElegido].precio}`
);

let compraOtroProducto = prompt(
  "¿Deseas comprar otro producto? Responde si o no"
);

const verificadorDeRespuesta = () => {
  while (compraOtroProducto != "si" && compraOtroProducto != "no") {
    compraOtroProducto = prompt(
      "¿Desea comprar otro producto? Responda si o no"
    );
  }
  while (compraOtroProducto == "") {
    compraOtroProducto = prompt(
      "Lo Sentimos. No se permiten campos vacios. ¿Desea comprar otro producto? Responda si o no"
    );
  }
};

verificadorDeRespuesta();

const comprarOtroProducto = () => {
  if (compraOtroProducto == "si") {
    productoElegido = prompt(imprimirCatalogo());
    verificadorDeProducto();
    carrito.push(catalogo[productoElegido]);
    console.log(carrito);
    alert(
      `${nombreUsuario} has elegido ${catalogo[productoElegido].nombre} por $${catalogo[productoElegido].precio}`
    );
    compraOtroProducto = prompt(
      "¿Deseas comprar otro producto? Responda si o no"
    );
    verificadorDeRespuesta();
    comprarOtroProducto();
  } else {
    const mostrarCarrito = () => {
      let texto = `${nombreUsuario} usted ha comprado: \n`;
      carrito.forEach((producto) => {
        texto += `${producto.nombre} - $${producto.precio} \n`;
      });
      const total = carrito.reduce((acc, item) => acc + item.precio, 0);
      texto += `el total a pagar es $${total}`;
      return texto;
    };
    alert(mostrarCarrito());
  }
};

comprarOtroProducto();
