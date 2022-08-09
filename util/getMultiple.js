const getMultiple = (weight, bodyWeight) => {
  return Math.floor((weight / bodyWeight) * 1000) / 1000;
};

module.exports = getMultiple;
