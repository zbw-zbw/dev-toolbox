import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';

interface IProps {
  /** 复制的内容 */
  value: string;
  /** 按钮文案 */
  text?: string;
}

function CopyBtn({ value, text = '复制' }: IProps) {
  const handleCopy = () => {
    try {
      copy(value);
      message.success('复制成功');
    } catch (error) {
      message.error('复制失败');
      console.error('Copy error:', JSON.stringify(error));
    }
  };

  return (
    <Button type="primary" className="ml-8 mr-8" onClick={handleCopy}>
      {text}
    </Button>
  );
}

export default CopyBtn;
