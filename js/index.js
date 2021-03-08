const cart = [];
var contador = 0

fetch("https://fakestoreapi.com/products?limit=20")
  .then((res) => res.json())
  .then((json) => {
    const ul = document.querySelector(".lista");
    json.forEach((product) => {
      const li = document.createElement("li");
      const title = document.createElement("h6");
      const img = document.createElement("img");
      const price = document.createElement("span");
      const button = document.createElement("button"); // Botón

      title.innerText = product.title;
      img.src = product.image;      
      price.innerHTML = `<b>$${product.price}</b>`;

      button.innerHTML = 'Add' // El botón tendrá el texto 'Add
      button.id = "boton" + product.id // A cada botón le asigno el id del producto
      button.classList = "addButton" // A cada botón le asigno una clase para CSS

      li.appendChild(title);
      li.appendChild(img);
      li.appendChild(price);

      li.appendChild(button);
      ul.appendChild(li);

      const index = product.id // Seteo un index para asignarle a cada botón un número de ID

      document.getElementById(`boton${index}`).onclick = function() { 
        // A cada botón 'add' le asigno un evento al ser clickeado.

        alert('Se agregó el siguiente producto al carrito: '+ product.title) // Alerta para producto

        let lista = document.querySelector(".modalLista") // Selecciono '.modalLista' que es un <ul>
        let li = document.createElement('li') // Creo un <li>
        li.innerHTML = `<b>${product.price}$</b>` + ` - ${product.title}  ` // Mi contenido de <li>
        li.classList = '.sideList' // La clase que tendrá cada <li>
        li.id = `item${index}` // El id que tendrá cada <li>
        lista.appendChild(li) // A mi <ul> le inserto un <li>

        contador += product.price
        let total = document.querySelector('#total') // Selecciono 'span' total
        total.innerHTML = `<b>Total:</b> $ ` + contador
        
        let buttonDelete = document.createElement('button') // Creo un botón para eliminar productos
        buttonDelete.id = `delete${index}` // La ID del botón será 'delete1', ...
        buttonDelete.classList = 'deleteButton' // La clase de mi botón
        buttonDelete.innerHTML = '<b>-</b>' // Se verá como un '[-]'
        li.appendChild(buttonDelete) // A mi <li> le inserto el <button> para eliminar

        document.getElementById(`delete${index}`).onclick = function() {
          // Ahora a cada botón [-] le asigno un evento al ser clickeado.

          let lista = document.getElementById('side') // Selecciono 'modalLista' que tiene un id='side'
          let item = document.getElementById(`item${index}`) // Selecciono el <li> que tiene un id='itemX'
          // let remove = document.getElementById(`delete${index}`)
          lista.removeChild(item) // A mi <ul> padre le quito su hijo <li>
          alert(`Se ha removido el artículo.`) // Alerta
        }
      }
      
    });
  });
  
  const showCart = () => {
    cart.map((item) => {
      document.querySelector(".modalList").appendChild(item);
  });
};

document.querySelector(".close").onclick = function () {
  document.querySelector(".modal").style.display = "none";
};

document.querySelector(".cart").onclick = function () {
  const modal = document.querySelector(".modal");
  modal.style.display === "none"
    ? (modal.style.display = "flex")
    : (modal.style.display = "none");
};

document.querySelector('.menu').onclick = function () {
  alert("Este menú desplegable aún se encuentra en construcción, Gracias vuelva prontos!")
}

document.querySelector('.title').onclick = function () {
  var subTitle = document.querySelector('.subtitle')
  subTitle.innerHTML = 'Juli aprobame porfa'
  alert('You founded a easter egg')
}
