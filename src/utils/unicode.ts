import { isEmpty } from './is';

export function chineseToUnicode(value: string) {
  if (isEmpty(value)) return value;

  let str = '';
  for (let i = 0; i < value.length; i++) {
    str += '\\u' + value.charCodeAt(i).toString(16);
  }

  return str;
}

export function unicodeToChinese(value: string) {
  if (isEmpty(value)) return value;

  const strArr = value.split('\\u');
  let str = '';

  for (let i = 0; i < strArr.length; i++) {
    str += String.fromCharCode(Number(parseInt(strArr[i], 16).toString(10)));
  }

  return str;
}
