function capitalize(string) {
  return string[0] + string.slice(1).toLowerCase();
}

export const parseDescription = (value) => capitalize(value.replace('|', ' '));

