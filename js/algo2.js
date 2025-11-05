export function calculerMoyenne(notes) {
  if (!Array.isArray(notes) || notes.length === 0) {
    throw new Error("Le paramètre doit être un tableau non vide");
  }

  let somme = 0;
  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }

  return somme / notes.length;
}

// const notes = [12, 15, 18, 10];
// console.log("Moyenne :", calculerMoyenne(notes));
