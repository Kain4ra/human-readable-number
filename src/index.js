module.exports = function toReadable (number) {
  if (String(number).length == 1) {
    return numberWords[number];
  }
  if (number > 9 && number < 20) {
    return numberWordsNext(String(number));
  }
  if (number > 19 && number < 100) {
    if (String(number)[1] == 0) {
      return dozens[String(number)[0]];
    } 
    else {
    return dozens[String(number)[0]] + ' ' + numberWords[String(number)[1]];
    }
  }
  if (number > 99 && number < 1000) {
    if (String(number)[1] == 0 && String(number)[2] == 0) {
      return numberWords[String(number)[0]] + ' hundred';
    }
    else if (String(number)[1] == 0) {
      return numberWords[String(number)[0]] + ' hundred ' + numberWords[String(number)[2]];
    }
    else if (String(number)[1] == 1) {
      return numberWords[String(number)[0]] + ' hundred ' + numberWordsNext(String(number).substring(1));
    }
    else {
      if (String(number)[2] == 0) {
        return numberWords[String(number)[0]] + ' hundred '+ dozens[String(number)[1]];
      }
      else {
      return numberWords[String(number)[0]] + ' hundred '+ dozens[String(number)[1]] + ' ' + numberWords[String(number)[2]];
      }
    }
  }
}

const numberWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
}

function numberWordsNext(number) {
  switch (number) {
    case '10': 
      return 'ten';
    case '11':
      return 'eleven'
    case '12':
      return 'twelve';
    case '13':
      return 'thirteen';
    case '15':
      return 'fifteen';
    case '18':
      return 'eighteen';
    default:
      return numberWords[String(number)[1]] + 'teen';
  }
}

const dozens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}