export const getTwoDigitsNumberWithZero = (number) => {
  number = String(number);

  if (number.length > 1) {
      return number;
  }

  return `0${number}`;
};
