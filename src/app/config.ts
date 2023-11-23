export interface ToolItem {
  title: string;
  desc: string;
  path: string;
  icon: string;
  url?: string;
}

export const tools: ToolItem[] = [
  {
    title: '时间戳转换',
    desc: '时间戳转换工具',
    path: '/timestamp-convert',
    icon: '/timestamp.png',
  },
  {
    title: 'URL 编码 / 解码',
    desc: 'URL 编码 / 解码工具',
    path: '/url-decode',
    icon: '/url.png',
  },
  {
    title: 'Unicode 编码',
    desc: 'Unicode 编码工具',
    path: '/unicode',
    icon: '/unicode.png',
  },
  {
    title: 'JSON 格式化',
    desc: 'JSON 格式化工具',
    path: '/json-format',
    icon: '/json.png',
  },
  {
    title: 'UUID 生成器',
    desc: 'UUID 生成工具',
    path: '/uuid-generate',
    icon: '/uuid.png',
  },
  {
    title: '颜色选择器',
    desc: '颜色选择工具',
    path: '/color-picker',
    icon: '/color.png',
  },
  {
    title: '字符统计',
    desc: '字符统计工具',
    path: '/str-count',
    icon: '/count.png',
  },
  {
    title: '进制转换',
    desc: '进制转换工具',
    path: '/binary-convert',
    icon: '/binary.png',
  },
  {
    title: '数字转人民币',
    desc: '数字转人民币工具',
    path: '/num-to-rmb',
    icon: '/rmb.png',
  },
  {
    title: 'MD5 加密',
    desc: 'MD5 加密工具',
    path: '/md5-lock',
    icon: '/lock.png',
  },
  {
    title: 'IP 地址查询',
    desc: 'IP 归属地查询工具',
    path: '/ip-check',
    icon: '/ip.png',
  },
  {
    title: '代码着色',
    desc: '代码着色/高亮工具',
    path: '/code-highlight',
    icon: '/highlight.png',
  },
  {
    title: '代码在线运行',
    desc: '代码在线运行工具',
    path: '/code-run',
    icon: '/code.png',
    url: 'https://codepen.io/',
  },
  {
    title: '图片压缩',
    desc: '图片在线压缩工具',
    path: '/pic-zip',
    icon: '/zip.png',
    url: 'https://tinypng.com/',
  },
  {
    title: 'Markdown 编辑器',
    desc: 'Markdown 在线编辑器',
    path: '/markdown-editor',
    icon: '/markdown.png',
    url: 'https://pandao.github.io/editor.md/',
  },
  {
    title: 'favicon 制作',
    desc: 'favicon 在线制作工具',
    path: '/favicon-create',
    icon: '/favicon.png',
    url: 'https://www.bitbug.net/',
  },
  {
    title: '二维码生成器',
    desc: '文本 / 链接生成二维码工具',
    path: '/qrcode',
    icon: '/qrcode.png',
    url: 'https://cli.im/',
  },
  {
    title: '代码生成图片',
    desc: '代码生成图片工具',
    path: '/code-to-pic',
    icon: '/pic.png',
    url: 'https://carbon.now.sh/',
  },
  {
    title: 'JSON to TS',
    desc: 'JSON 转换成 Typescript 类型工具',
    path: '/json-to-ts',
    icon: '/ts.png',
  },
  {
    title: '文件对比',
    desc: '文件对比工具',
    path: '/file-diff',
    icon: '/diff.png',
  },
];
