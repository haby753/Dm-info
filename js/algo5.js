export function genererCodesPostaux(departement) {
  const codes = [];
  let debut = departement * 1000;
  let fin = debut + 999;

  while (debut <= fin) {
    codes.push(debut);
    debut++;
  }

  return codes;
}

// console.log(genererCodesPostaux(69));
