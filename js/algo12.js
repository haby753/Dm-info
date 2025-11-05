export function tableauAleatoireEtTest(chiffre) {
  const tableau = [];

  // Générer 10 nombres aléatoires
  for (let i = 0; i < 10; i++) {
    tableau.push(Math.floor(Math.random() * 101));
  }

  console.log("Tableau généré :", tableau);

  // Vérifier si le chiffre est présent
  return tableau.includes(chiffre);
}

// console.log(tableauAleatoireEtTest(42));
