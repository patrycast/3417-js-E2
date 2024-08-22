const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Imprimir en consola:
// a)  Las pizzas que tengan un id impar.
console.log("Pizzas con id impares:")
for(let i=0;i< pizzas.length; i++ ){
  if(pizzas[i].id %2 !==0){
    console.log("ID:", pizzas[i].id)
    console.log("Nombre:", pizzas[i].nombre)
    console.log( "Ingredientes:")
    for(let j=0; j<pizzas[i].ingredientes.length; j++){
      console.log(pizzas[i].ingredientes[j]);
    }
    console.log("Precio:$", pizzas[i].precio);
  }
};


// b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log(" ¿Hay alguna pizza que valga menos de $600?")

let pizzasMenorA600 = false;

for (let i = 0; i <pizzas.length; i++){
  if (pizzas[i].precio < 600){
    pizzasMenorA600 = true;
    console.log("Sí, La Pizza con valor a menos de $600 es: La", pizzas[i].nombre);
    console.log("con los siguientes ingredientes:");
    for (let j = 0; j < pizzas[i].ingredientes.length; j++) {
      console.log(pizzas[i].ingredientes[j]);
    }
    console.log("y el precio de $" + pizzas[i].precio);
  }
}

if (!pizzasMenorA600) {
  console.log("Lo siento, no hay pizzas con valor menor a $600");
}


// c) El nombre de cada pizza con su respectivo precio.
console.log("***lista de precios***");
for(let i=0; i< pizzas.length; i++){
  console.log("Nombre: ", pizzas[i].nombre, "  Precio: $",  pizzas[i].precio);
}


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza 
//   que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del 
//   array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

console.log("*** Ingredientes de cada pizza ***");
for (let i = 0; i < pizzas.length; i++) {
  console.log("Pizza:", pizzas[i].nombre);
  console.log("Ingredientes:");
  for (let j = 0; j < pizzas[i].ingredientes.length; j++) {
    console.log(pizzas[i].ingredientes[j]);
  }
  console.log("----------------------");
}
