'use client';

import { theme } from 'antd';
import dayjs from 'dayjs';

function Footer() {
  const today = dayjs().format('YYYY-MM-DD');

  return (
    <div className="footer mx-auto py-4 text-center">
      <div>Copyright © 2023 | {today}</div>
      <div>
        <span className="mr-2">Author by:</span>
        <a style={{ color: theme.useToken().token.colorPrimary }} target="_blank" href="https://github.com/zbw-zbw">
          zbw-zbw
        </a>
      </div>
    </div>
  );
}

export default Footer;
