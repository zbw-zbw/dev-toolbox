export const is = (value: unknown, type: string) =>
  Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase() === type;

export const isObject = (value: unknown) => is(value, 'object');

export const isNull = (value: unknown) => is(value, 'null');

export const isUndefined = (value: unknown) => is(value, 'undefined');

export const isEmpty = (value: unknown) => {
  return value === '' || isNull(value) || isUndefined(value);
};
