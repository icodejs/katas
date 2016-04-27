/*
  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

  Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

  Please note that using "encode" in Python is considered cheating.

  Solutions:

  function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }

  function rot13(message){
    return message.replace(/[a-zA-Z]/g, function(c){
      var c13 = c.charCodeAt(0) + 13;
      var endCharCode = ( c > 'Z')? 122 : 90;
      return String.fromCharCode(  endCharCode < c13 ?  c.charCodeAt(0) - 13 : c13 );
    });
  }

  function rot13(message) {
    var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
  }
 */

function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return [...message].map(c => {
    const indexOf = alphabet.indexOf(c.toLowerCase());
    if (indexOf === -1) return c;

    const len = alphabet.length - 1;
    const ri = indexOf + 13;
    const index = ri > len ? (ri - len - 1) : ri;

    if (alphabet.includes(c)) return alphabet[index];
    return alphabet[index].toUpperCase();
  }).join('');
}

export default rot13;
