export function repartirValeurs() {
  const tableau = [];
  const inferieurs = [];
  const superieurs = [];

  for (let i = 0; i < 10; i++) {
    tableau.push(Math.floor(Math.random() * 101));
  }

  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] < 50) {
      inferieurs.push(tableau[i]);
    } else {
      superieurs.push(tableau[i]);
    }
  }

  return [inferieurs, superieurs]
  console.log("Tableau de base :", tableau);
  console.log("Inférieurs à 50 :", inferieurs);
  console.log("Supérieurs ou égaux à 50 :", superieurs);
}

// repartirValeurs();
