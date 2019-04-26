export const removeItemInArray = (arr, value) => {
  return arr.filter(ele => ele !== value);
};

export const inArray = (arr, value) => {
  return arr.find(ele => ele === value) !== undefined;
};