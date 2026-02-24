export class Store {
  constructor() {
    this.productos = [];
    this.filtered = [];
    this.error = null;
    this.loading = false;
    this.loaded = false;
  }

  getProducts() {
    return this.filtered;
  }

  setProducts(products) {
    this.productos = products;
    this.filtered = products;
    this.loaded = true;
  }

  setLoading(value) {
    this.loading = value;
    }

    setError(value) {
    this.error = value;
  }

  
}

function getCheckBox() {
  return document.querySelector("#onlyoffers").checked;
}


const onlyOffer = getCheckBox();




