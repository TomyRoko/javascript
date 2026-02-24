import { products } from "./products.js";
import { getQuery } from "./dom.js";
import { getOnlyOffers } from "./dom.js";
import { filterByQuery } from "./logic.js";
import { filterByOffers } from "./logic.js";
import { filterByOffers } from "./logic.js";
import { renderList } from "./dom.js";
import { renderMessage } from "./dom.js";

function renderAndFilter() {
  const query = getQuery();
  const onlyOffers = getOnlyOffers();

  let filtered = filterByQuery(products, query);
  filtered = filterByOffers(filtered, onlyOffers);

  renderList(filtered);
  renderMessage(filtered);
}

renderAndFilter();

document.querySelector("#search").addEventListener("keyup", renderAndFilter);

document
  .querySelector("#onlyOffers")
  .addEventListener("change", renderAndFilter);
