const p = document.querySelector("p");

p.classList.add("activo");

console.log(p.classList);

const p1 = document.querySelector("p");
p1.classList.remove("activo");
console.log(p1.classList);


console.log(p1.classList.contains("activo"));

p1.classList.toggle("activo");
console.log(p1.classList);

p1.classList.toggle("activo");
console.log(p1.classList);

p1.classList.toggle("activo");
console.log(p1.classList);