function calculateBMI() {
  let weightInput = prompt("Enter your Weight in kg: ");
  let heightInput = prompt("Enter your Height in cm: ");

  let weight = parseFloat(weightInput);
  let heightCm = parseFloat(heightInput);

  let height = heightCm / 100;

  let bmi = weight / (height * height);

  document.getElementById("result").innerHTML = `Your BMI is : ${bmi.toFixed(
    2
  )}`;
}
