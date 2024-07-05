function calculateAge() {
  // Get the user's date of birth
  const yearOfBirth = parseInt(document.getElementById("year").value);
  const monthOfBirth = parseInt(document.getElementById("month").value) - 1; // Months are zero-indexed
  const dayOfBirth = parseInt(document.getElementById("day").value);

  // Check if all the form fields are filled
  if (isNaN(yearOfBirth) || isNaN(monthOfBirth) || isNaN(dayOfBirth)) {
    document.getElementById("result").innerHTML = "Please fill in all the fields.";
    return;
  }

  // Create a new Date object with the user's date of birth
  const dateOfBirth = new Date(yearOfBirth, monthOfBirth, dayOfBirth);

  // Get the current date
  const currentDate = new Date();

  // Calculate the age
  const ageInMilliseconds = currentDate.getTime() - dateOfBirth.getTime();
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

  // Display the result
  document.getElementById("result").innerHTML = `Your age is ${ageInYears} years old.`;
}