export function calculerPrixTTC(prixHT, tauxTVA) {
  if (prixHT < 0 || tauxTVA < 0) {
    throw new Error("Les valeurs doivent être positives");
  }

  const prixTTC = prixHT * (1 + tauxTVA / 100);
  return prixTTC;
}

// console.log(calculerPrixTTC(100, 20)); // 120
// console.log(calculerPrixTTC(59.99, 5.5)); // 63.28945
