const checkStringLength = (string, maxLength) => string.length <= maxLength;

function isPalindrome (string) {
  string = string.replaceAll(' ','').toLowerCase();
  const reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

function getNumber (string) {
  let num = '';
  string = string.toString();
  for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt(string[i]))){
      num += string[i];
    }
  }
  if (num.length === 0) return NaN;
  return parseInt(num);
}
