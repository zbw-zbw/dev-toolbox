import Link from 'next/link';
import { Button } from 'antd';

function BackHomeBtn() {
  return (
    <Link href="/">
      <Button type="primary">返回首页</Button>
    </Link>
  );
}

export default BackHomeBtn;
