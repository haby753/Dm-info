export function genererSuite(nombre) {
  let resultat = "";

  for (let i = 1; i <= nombre; i++) {
    for (let j = 1; j <= i; j++) {
      resultat += i;
    }
  }

  return resultat;
}

// console.log(genererSuite(5));
