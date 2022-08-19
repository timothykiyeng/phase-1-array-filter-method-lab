// Code your solution here

function findMatching(array, name) {
  const matchingDrivers = array.filter((n) =>
    n.toLowerCase().includes(name.toLowerCase())
  );
  return matchingDrivers;
}

function fuzzyMatch(array, string) {
  let length = string.length;
  const matchNames = array.filter((n) => n.slice(0, length) === string);
  return matchNames;
}

function matchName(array, nameInput) {
  let matchingDriverNames = array.filter((n) => n.name === nameInput);
  return matchingDriverNames;
}
