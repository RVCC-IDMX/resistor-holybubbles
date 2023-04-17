/* resistor.js */

/*
  electronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and
  determine the resistance value in Ohms

  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const multiplierCodes = {
  black: 1,
  brown: 10,
  red: 100,
  orange: 1000,
  yellow: 10000,
  green: 100000,
  blue: 1000000,
  violet: 10000000,
  grey: 100000000,
  white: 1000000000,
  gold: 0.1,
  silver: 0.01,
};

const toleranceCodes = {
  brown: '±1%',
  red: '±2%',
  green: '±0.5%',
  blue: '±0.25%',
  violet: '±0.1%',
  grey: '±0.05%',
  gold: '±5%',
  silver: '±10%',
};

function getColorValue(color) {
  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  return colorCodes[color];
}

function getMultiplierValue(color) {
  const multiplierCodes = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    grey: 100000000,
    white: 1000000000,
    gold: 0.1,
    silver: 0.01,
  };
  return multiplierCodes[color];
}

function getThreeBandValue(bands) {
  // write your code here & return value
  const temp = (getColorValue(bands.color1) * 10 + getColorValue(bands.color2))
    * getMultiplierValue(bands.multiplier);

  if (bands.multiplier === 'gold') {
    temp.toFixed(1);
  } else if (bands.multiplier === 'silver') {
    temp.toFixed(2);
  }
  return temp;
}

function formatNumber(val) {
  // from stackoverflow: https://stackoverflow.com/a/32638472
  const abbreviateNumber = (num, fixed) => {
    if (num === null) { return null; } // terminate early
    if (num === 0) { return '0'; } // terminate early
    const f = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    const b = (num).toPrecision(2).split('e'); // get power
    const k = b.length === 1 ? 0
      : Math.floor(Math.min(b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
    const c = k < 1 ? num.toFixed(0 + f)
      : (num / 10 ** (k * 3)).toFixed(1 + f); // divide by power
    const d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
    const e = d + ['', 'k', 'M', 'G', 'T'][k]; // append power
    return e;
  };

  return abbreviateNumber(val);
}

function getTolerance(color) {
  // write your code here & return value
  const toleranceCodes = {
    brown: '±1%',
    red: '±2%',
    green: '±0.5%',
    blue: '±0.25%',
    violet: '±0.1%',
    grey: '±0.05%',
    gold: '±5%',
    silver: '±10%',
  };

  return toleranceCodes[color];
}


const getResistorOhms = (bands) => { 
  // write your code here & return value
  return `Resistor value: ${formatNumber(getThreeBandValue(bands))} Ohms ${getTolerance(bands.tolerance)}`;
};

export { getResistorOhms };
