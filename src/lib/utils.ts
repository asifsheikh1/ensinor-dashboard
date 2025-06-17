export const getCapitalize = (text: string): string => {
  if (text.length === 2) {
    return text.toUpperCase();
  } else {
    return text[0].toUpperCase() + text.slice(1);
  }
};
