// Function to generate a random number between 1 and 6 (inclusive)
function rollDice() {
  for (let i = 1; i <= 5; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`die${i}`).value = randomNumber;
  }
}

// Event listener for DOMContentLoaded to set up button event
document.addEventListener("DOMContentLoaded", () => {
  const rollButton = document.getElementById("rollButton");
  
  // Roll dice when the button is clicked
  rollButton.addEventListener("click", rollDice);
  
  // Ensure the button stays focused to allow "Enter" key pressing
  rollButton.focus();
});
