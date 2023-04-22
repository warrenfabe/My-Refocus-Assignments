function calculateBMI(weight, height) {
    // Convert height to meters
    height /= 100;
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Return BMI rounded to 2 decimal places
    return bmi.toFixed(2);
  }
  
  // Example usage
  const weight = 64; // kg
  const height = 163; // cm
  
  const bmi = calculateBMI(weight, height);
  console.log(`Your Body Mass Index is ${bmi}.`);
  