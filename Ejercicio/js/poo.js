// class user {
//   constructor(name, email, password) {
//     this.name = [];
//     this.email = [];
//     this.password = [];
//   }
// }

class Session {
  constructor() {
    this.userId = null;
  }

  check(email, password) {
    const usersFind = users.find(
      (u) => email === u.email && password === u.password,
    );
    if (usersFind) {
      this.userId = usersFind.id;
      return true;
    }
    return false;
  }

  getUserId() {
    return this.userId;
  }
}

class Producto {
  constructor(id, name, price, oferta) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.oferta = oferta;
  }
}

class Catalogo {
  constructor(productos) {
    this.productos = productos;
  }
}

const productos = [];

json.foreach((p) => {
  const producto = new Producto(p.id, p.name, p.price, p.oferta);
  productos.push(producto);
});

const catalogo = new Catalogo(productos);


