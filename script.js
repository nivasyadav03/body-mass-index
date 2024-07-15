document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight.');
        return;
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let interpretation = '';

    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obesity';
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi} (${interpretation})`;
});
