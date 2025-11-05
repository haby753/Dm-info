export function motLePlusCourt(mots) {
  if (!Array.isArray(mots) || mots.length === 0) {
    throw new Error("Veuillez fournir un tableau de mots non vide");
  }

  let motCourt = mots[0];

  for (let i = 1; i < mots.length; i++) {
    if (mots[i].length < motCourt.length) {
      motCourt = mots[i];
    }
  }

  return motCourt;
}
