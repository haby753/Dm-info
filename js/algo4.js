export function momentDeLaJournee(heure) {
  if (heure >= 6 && heure < 12) {
    return "Matin";
  } else if (heure >= 12 && heure < 18) {
    return "Après-midi";
  } else if (heure >= 18 && heure < 24) {
    return "Soirée";
  } else if (heure >= 0 && heure < 6) {
    return "Nuit";
  } else {
    return "Heure invalide";
  }
}

// // Exemple d'utilisation
// console.log(momentDeLaJournee(9));   
// console.log(momentDeLaJournee(15));  
// console.log(momentDeLaJournee(21));  
// console.log(momentDeLaJournee(2));
