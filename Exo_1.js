function capitalizeNamesRed(names) {
  if (!Array.isArray(names)) {
    throw new TypeError("capitalizeNamesRed expects an array of strings");
  }

  return names.reduce((acc, name) => {
    if (typeof name !== "string") {
      throw new TypeError("capitalizeNamesRed expects an array of strings");
    }

    const lowerName = name.toLowerCase();
    const capitalized = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);

    acc.push(capitalized);
    return acc;
  }, []);
}

const capitalizeNames = capitalizeNamesRed;

module.exports = capitalizeNamesRed;
module.exports.capitalizeNamesRed = capitalizeNamesRed;
module.exports.capitalizeNames = capitalizeNames;
