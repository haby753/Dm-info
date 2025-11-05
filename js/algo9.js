export function permuter(nb1, nb2) {
  // Permutation via variable temporaire
  let temp = nb1;
  nb1 = nb2;
  nb2 = temp;

  return [nb1, nb2];
}

// console.log(permuter(2, 3));
