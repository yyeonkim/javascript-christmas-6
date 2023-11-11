function throwErrorIf(condition, message) {
  if (condition) throw new Error(message);
}

export { throwErrorIf };
