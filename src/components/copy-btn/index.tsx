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
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopy = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    try {
      copy(value);
      messageApi.success('复制成功');
    } catch (error) {
      messageApi.error('复制失败');
      console.error('Copy error:', JSON.stringify(error));
    }
  };

  return (
    <>
      {contextHolder}
      <Button className={className} type="primary" onClick={handleCopy}>
        {text}
      </Button>
    </>
  );
}

export default CopyBtn;
