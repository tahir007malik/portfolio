function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Fetches the current year and adds it to the footer
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Calculates the exact age based on date of birth
function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Fetches the current age and updates it to an element with id "age"
const dob = '1999-10-14';  // Tahir's date of birth
const age = calculateAge(dob);
document.getElementById("age").textContent = age;

// Loading my name in different languages for logo
const names = [
  "Tahir",        // English
  "طاہر",         // Urdu
  "ताहिर",        // Hindi
  "タヒル",        // Japanese
  "Тахир"         // Russian
];
function displayRandomName() {
  const randomIndex = Math.floor(Math.random() * 5);
  document.getElementById("dynamic-logo1").textContent = names[randomIndex];
  document.getElementById("dynamic-logo2").textContent = names[randomIndex];
}

displayRandomName()