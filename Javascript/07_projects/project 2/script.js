// ==================== Project 2: BMI Calculator ====================

// Select the <form> element to listen for form submission:
const form = document.querySelector("form");

// Note: Extracting input values OUTSIDE the submit listener (e.g., const height = parseInt(document.querySelector('#height').value))
// would store an empty string/NaN on page load before the user types anything. Always extract values INSIDE the submit handler!

// Listen for the form 'submit' event:
form.addEventListener("submit", function (e) {
  // Prevent default form submission behavior (stops page reload/refresh):
  e.preventDefault();

  // Retrieve height and weight values from input fields and parse them to numbers using parseInt():
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  
  // Select the #results <div> element to render the calculation output:
  const results = document.querySelector("#results");

  // Validate height input (check for empty values, negative numbers, or NaN):
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  
  // Validate weight input:
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // Formula for BMI: weight(kg) / (height(m))^2
    // Since height is given in centimeters, convert cm to meters by dividing by 100 => (height * height) / 10000
    // .toFixed(2) rounds the resulting number to 2 decimal places:
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the calculated BMI result along with the corresponding health category:
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} - Underweight`;
    } else if (bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} - Normal Range`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} - Overweight`;
    }
  }
});

