function rot13(str) { // LBH QVQ VG!
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str.split("").map((letter) => (alpha.indexOf(letter) == -1) ? letter : alpha[(alpha.indexOf(letter)+13)%26]).join("");
}
