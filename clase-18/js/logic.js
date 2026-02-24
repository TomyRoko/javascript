export function filterByQuery(products, query) {
  return products.filter((p) => p.title.toLowerCase().includes(query));
}

export function filterByOffers(products, onlyOffers) {
  let filtered = products;

  if (onlyOffers) {
    filtered = products.filter((p) => p.oferta === true);
  }

  return filtered;
}

export function filterByOffers(products, onlyOffers) {
  let filtered = products;

  if (onlyOffers) {
    filtered = products.filter((p) => p.oferta === true);
  }

  return filtered;
}
