function telephoneCheck(str) {
  // Good luck!
  let spaceRegex = /\S/g;
  let numRegex = /^[1]?\d{3}[-]?\d{3}[-]?\d{4}$|^[1]?[(]\d{3}[)][-]?\d{3}[-]?\d{4}$/;
  let strNoSpace = str.match(spaceRegex).join("");
  let answer = strNoSpace.match(numRegex);
  return (answer != null)
}