module.exports = (value) => {
  return value && value.toUTCString ? value.toUTCString() : null;
};
