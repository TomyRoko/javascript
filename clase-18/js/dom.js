export function getQuery() {
  return document.querySelector("#search").value.trim().toLowerCase();
}

export function getOnlyOffers() {
  return document.querySelector("#onlyOffers").checked;
}

export function renderList(products) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  products.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.title} - $${p.price} ${p.oferta ? "(Oferta)" : ""}`;
    list.appendChild(li);
  });
}

export function renderMessage(products) {
  const msg = document.querySelector("#msg");
  msg.textContent = products.length === 0 ? "Sin resultados" : "";
}
