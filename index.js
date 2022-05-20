const NUM_TO_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'quarter',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'half',
];

function incrementHour(hour) {
  return hour % 12 === 0 ? 1 : hour + 1;
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let [hour, min] = time.split(':');

  hour = parseInt(hour, 10);
  min = parseInt(min, 10);

  if (min === 0 && hour % 12 === 0) {
    return hour === 12 ? 'midday' : 'midnight';
  }

  const isExactHour = min === 0;
  if (isExactHour) {
    return `${NUM_TO_WORDS[hour]} o'clock`;
  }

  const lessOrEqualToThirty = min <= 30;
  if (lessOrEqualToThirty) {
    return `${NUM_TO_WORDS[min]} past ${NUM_TO_WORDS[hour]}`;
  }

  return `${NUM_TO_WORDS[60 - min]} to ${NUM_TO_WORDS[incrementHour(hour)]}`;
}

module.exports = { convertTimeToWords };
