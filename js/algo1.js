
export function determinerCategorie(age) {
  if (age <= 10) {
    return "Enfant";
  } else if (age >= 11 && age <= 17) {
    return "Adolescent";
  } else if (age >= 18 && age <= 50) {
    return "Majeur";
  } else {
    return "Senior";
  }
}

// console.log(determinerCategorie(8));   // Enfant
// console.log(determinerCategorie(15));  // Adolescent
// console.log(determinerCategorie(30));  // Majeur
// console.log(determinerCategorie(70));  // Senior
