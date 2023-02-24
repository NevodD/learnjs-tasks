let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (array) => {
  const map = new Map;
  for (const value of array) {
    const key = value.toLowerCase().split("").sort().join("");
    map.set(key, value);
  }
  return Array.from(map.values());
};

console.log(aclean(arr));