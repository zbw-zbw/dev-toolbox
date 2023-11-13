import { isEmpty } from '@/utils/is';
import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';

interface IProps {
  /** 复制的内容 */
  value: string;
  /** 按钮文案 */
  text?: string;
  className?: string;
}

function CopyBtn({ value, text = '复制', className = '' }: IProps) {
  const handleCopy = () => {
    if (isEmpty(value)) {
      return void message.warning('复制的内容不能为空');
    }

    try {
      copy(value);
      message.success('复制成功');
    } catch (error) {
      message.error('复制失败');
      console.error('Copy error:', JSON.stringify(error));
    }
  };

  return (
    <Button className={className} type="primary" onClick={handleCopy}>
      {text}
    </Button>
  );
}

export default CopyBtn;
