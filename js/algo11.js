const countries = [67595000, 9998000, 8417000, 1820631, 434403, 122273500, 82800000];

export function analysePopulations(tab) {
  const nombrePays = tab.length;
  let totalHabitants = 0;

  for (let i = 0; i < tab.length; i++) {
    totalHabitants += tab[i];
  }

  return { size:nombrePays, population:totalHabitants };
}

// console.log(analysePopulations(countries));
