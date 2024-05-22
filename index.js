function getValue(inputID) {
    var value = document.getElementById(inputID).value;
    return value;
}

function transCalculateCO2() {
    var distance = parseFloat(getValue('transpo'));
    var transportationType = getValue('transportationType');
    var emissionFactor = 0;

    switch (transportationType) {
        case 'bike':
            emissionFactor = 0.3;
            break;
        case 'car':
            emissionFactor = 1;
            break;
        case 'public':
            emissionFactor = 0.2;
            break;
        case 'walk':
            emissionFactor = 0;
            break;
        default:
            console.log('Invalid transportation type');
    }

    var co2Emission = distance * emissionFactor;
    return co2Emission;
}

function energyCalculateCO2() {
    var energyUsage = parseFloat(getValue('energy'));
    var emissionFactor = 0.5;
    var co2Emission = energyUsage * emissionFactor;
    return co2Emission;
}

function waterCalculateCO2() {
    var waterUsage = parseFloat(getValue('water'));
    var emissionFactor = 3;
    var co2Emission = waterUsage * emissionFactor;
    return co2Emission;
}

function wasteCalculateCO2() {
    var wasteUsage = parseFloat(getValue('waste'));
    var emissionFactor = 0.5;
    var co2Emission = wasteUsage * emissionFactor;
    return co2Emission;
}

function dietCalculateCO2() {
    var dietUsage = parseFloat(getValue('diet'));
    var emissionFactor = 15;
    var co2Emission = dietUsage * emissionFactor;
    return co2Emission;
}

var check = true;

function validate() {
    var textBox1 = getValue('transpo');
    var textBox2 = getValue('energy');
    var textBox3 = getValue('water');
    var textBox4 = getValue('waste');
    var textBox5 = getValue('diet');
    
    if (textBox1 === "" || textBox2 === "" || textBox3 === "" || textBox4 === "" || textBox5 === "" ) {
        alert("Please fill up the entire form!");
        return false; // Return false if validation fails
    } else {
        return true; // Return true if validation passes
    }
}

function printValue() {
    var trans = transCalculateCO2();
    var energy = energyCalculateCO2();
    var water = waterCalculateCO2();
    var waste = wasteCalculateCO2();
    var diet = dietCalculateCO2();
    var name = getValue('name');
    var totalCO2Emission = trans + energy + water + waste + diet;
    document.getElementById('result').innerHTML = 'Hi ' + name + '!' +
    '<br>CO2 Emission: ' + totalCO2Emission.toFixed(3) + ' kg' +
    "<br>You're carbon footprint is  " + classifyValue(totalCO2Emission);
}

function openModal() {
    if(validate()) { // Check if form is valid
        printValue();
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function classifyValue(value) {
    if (value < 5) {
        return 'Low';
    } else if (value > 15){
        return 'High';
    } else {
        return 'Average';
    }
}
