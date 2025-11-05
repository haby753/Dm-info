export function fibonacci(max) {
  const suite = [1, 2];
  let suivant = 0;

  while (true) {
    suivant = suite[suite.length - 1] + suite[suite.length - 2];
    if (suivant > max) break;
    suite.push(suivant);
  }

  return suite;
}

// console.log(fibonacci(100));
