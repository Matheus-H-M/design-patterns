// Try to get the value of 'contador' from localStorage.
// If it doesn't exist (null or undefined), use 0 as the default value.
let contador = localStorage.getItem('contador') || 0;

// The value retrieved from localStorage is a string, so we convert it to a number and increment it by 1.
contador++;

// Save the updated counter value back to localStorage.
// This ensures the value persists even after the user reloads or revisits the page.
localStorage.setItem('contador', contador);

// Display the number of times the page has been visited (according to this browser).
console.log(`Você visitou esta página ${contador} vezes.`);
