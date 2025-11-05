export function tableDeMultiplication(nombre, max=10) {
  const results = []
  for (let i = 1; i <= max; i++) {
    results.push(`${nombre}*${i}=${nombre*i}`);
  }
  return results
}

// tableDeMultiplication(5);

