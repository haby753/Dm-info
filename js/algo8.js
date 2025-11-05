export function verifierEmail(email) {
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// console.log(verifierEmail("test@example.com")); // true
// console.log(verifierEmail("mauvais-email@"));
