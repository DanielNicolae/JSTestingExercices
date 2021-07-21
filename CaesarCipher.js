function CaesarCipher(text, key) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let cipher = [];
  if (key > 0) {
    for (let i = key; i <= alphabet.length - key; i++) {
      cipher.push(alphabet[i]);
    }
    for (let j = key - 1; j < key; j++) {
      cipher.push(alphabet[j]);
    }
  } else if (key < 0) {
    cipher.push(...alphabet.slice(key));
    cipher.push(...alphabet.slice(0, 26 + key)); // the key is < 0, so +
  } else {
    cipher = [...alphabet];
  }
  console.log(cipher);

  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toLowerCase() && (/[a-zA-Z]/).test(text[i])) {
      let charIndex = alphabet.indexOf(text[i]);
      result += cipher[charIndex];
    }
    else if (text[i] === text[i].toUpperCase() && (/[a-zA-Z]/).test(text[i])) {
      let charIndex = alphabet.indexOf(text[i].toLowerCase());
      result += cipher[charIndex].toUpperCase();
    }
    else {
      result += text[i];
    }

  }
  return result;
}

module.exports = CaesarCipher;