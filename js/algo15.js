export function division(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro interdite !");
  }
  return a / b;
}
// try {
//   console.log(division(10, 2)); // 5
//   console.log(division(8, 0));  // Erreur
// } catch (erreur) {
//   console.error("Erreur :", erreur.message);
// }
