import { getResistorOhms } from './resistor.js';

let resistorState = {
    color1: 'black',
    color2: 'black',
    multiplier: 'black',
    tolerance: 'brown'
};

const band1 = document.querySelector('#band1');
const band2 = document.querySelector('#band2');
const bandMultiplier = document.querySelector('#band-multiplier');
const bandTolerance = document.querySelector('#band-tolerance');
const updateBtn = document.querySelector("#update-btn");

// updateBtn.addEventListener("click", updateResistor);

band1.addEventListener("change", updateResistor);
band2.addEventListener("change", updateResistor);
bandMultiplier.addEventListener("change", updateResistor);
bandTolerance.addEventListener("change", updateResistor);


function updateResistor() {
    const color1 = band1.value;
    const color2 = band2.value;
    const colorMultiplier = bandMultiplier.value;
    const colorTolerance = bandTolerance.value;

    
    const resistorBand1 = document.querySelector('#b0');
    const resistorBand2 = document.querySelector('#b1');
    const resistorBand3 = document.querySelector('#b2');
    const resistorBand4 = document.querySelector('#b3');

    resistorBand1.classList.remove(resistorState.color1);
    resistorBand2.classList.remove(resistorState.color2);
    resistorBand3.classList.remove(resistorState.multiplier);
    resistorBand4.classList.remove(resistorState.tolerance);

    resistorBand1.classList.add(color1);
    resistorBand2.classList.add(color2);
    resistorBand3.classList.add(colorMultiplier);
    resistorBand4.classList.add(colorTolerance);

    resistorState = {
        color1,
        color2,
        multiplier: colorMultiplier,
        tolerance: colorTolerance
    }
    document.querySelector('.answer').innerText = getResistorOhms(resistorState); 
}

updateResistor();