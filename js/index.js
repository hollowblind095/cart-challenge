const cart = [];

fetch("https://fakestoreapi.com/products?limit=10")
  .then((res) => res.json())
  .then((json) => {
    const ul = document.querySelector(".lista");
    json.forEach((product) => {
      const li = document.createElement("li");
      const title = document.createElement("h6");
      const img = document.createElement("img");
      const price = document.createElement("span");

      title.innerText = product.title;
      img.src = product.image;
      price.innerText = "$" + product.price;

      li.appendChild(title);
      li.appendChild(img);
      li.appendChild(price);

      ul.appendChild(li);
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
