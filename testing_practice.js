export function capitalize(value){
  return value[0].toUpperCase() + value.slice(1);
}

export function reverseString(value){
  let temp = '';
  for(let i= value.length -1; i>=0; i--){
    temp += value[i];
  }
  return temp;
}

export let calculator = {
  add: function(a, b){
    return a + b;
  },
  subtract:function(a, b){
    return a - b;
  },
  divide: function(a, b){
    if(b === 0){
      throw Error("Divide by 0")
    }
    return a / b;
  },
  multiply: function(a, b){
    return a * b;
  },
}

export function caesarChipher(text, key){
  const regexp =  /[a-zA-Z]/;
  let result = '';
  for(let i = 0; i < text.length; i++){
    if(text[i].match(regexp) !== null){
      let asciiValue = text[i].charCodeAt(0);
      if(asciiValue >= 97 && asciiValue <= 122){
        let temp = ((asciiValue + key) - 97) % 26;
        result += String.fromCharCode(97 + temp);
      } else if(asciiValue >= 65 && asciiValue <= 90){
        let temp = ((asciiValue + key) - 65) % 26;
        result += String.fromCharCode(65 + temp);
      }
    }
    else{
      result += text[i];
    }
  }
  return result;
}

export function analyzeArray(array){
  let sum = 0;
  let obj = {
    average: null,
    min: null,
    max: null,
    length: array.length,
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if(obj.min === null || obj.min > array[i]){
      obj.min = array[i];
    } 

    if(obj.max === null || obj.max < array[i]){
      obj.max = array[i];
    }
  }
  obj.average = sum / obj.length;

  return obj;
}


// module.exports = {
//   capitalize,
//   reverseString,
//   calculator,
//   caesarChipher,
//   analyzeArray,
// }