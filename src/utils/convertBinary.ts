/**
 * 进制转换
 * @param content 需要转换的内容
 * @param source 内容源进制
 * @param target 目标进制
 * @returns 转换后的内容
 */
export function convertBinary(content: string, source: number, target: number) {
  return parseInt(content, source).toString(target);
}
