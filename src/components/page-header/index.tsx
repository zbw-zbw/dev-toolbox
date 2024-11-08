'use client';

import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Col, Row, Input, Tooltip, Space, theme } from 'antd';
import { GithubOutlined, SearchOutlined, TranslationOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { selectKeyword, selectTools, setKeyword, setSearchResults, ToolItem } from '@/store/toolsSlice';
import { debounce } from 'lodash';
import { pinyin } from 'pinyin-pro';
import { selectIsDarkMode, toggleMode } from '@/store/darkModeSlice';

function Header() {
  const router = useRouter();

  const pathname = usePathname();
  const isHome = pathname === '/';

  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const keyword = useSelector(selectKeyword);
  const tools = useSelector(selectTools);

  const isCompositionStartRef = React.useRef(false);

  const handleBackHome = () => {
    router.push('/');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setKeyword(value));

    if (isCompositionStartRef.current) return;

    debouncedSearch(value);
  };

  const onCompositionStart = () => {
    isCompositionStartRef.current = true;
  };

  const onCompositionEnd = () => {
    isCompositionStartRef.current = false;
    handleSearchTools(keyword);
  };

  const handleSearchTools = (value: string) => {
    const filteredTools = tools.filter((item: ToolItem) => {
      const toolTitlePinyin = pinyin(item.title, {
        toneType: 'none',
        separator: '',
      }).toLowerCase();

      return toolTitlePinyin.includes(value.toLowerCase());
    });

    dispatch(setSearchResults(filteredTools));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(handleSearchTools, 500), []);

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  const openGitHubHomePage = () => {
    window.open('https://github.com/zbw-zbw/dev-toolbox');
  };

  return (
    <div className="header sticky top-0 z-50 w-full">
      <Row align="middle" className="header-content h-full mx-auto">
        <Col span={4}>
          <div className="flex items-center cursor-pointer" onClick={handleBackHome}>
            <img src="/logo.png" alt="logo" width={48} height={48} />
            <span className="ml-2 font-bold text-xl" style={{ color: theme.useToken().token.colorPrimary }}>
              Dev Toolbox
            </span>
          </div>
        </Col>
        <Col span={12} offset={2}>
          {isHome && (
            <div className="header-input flex">
              <Input
                prefix={<SearchOutlined />}
                placeholder="请输入工具名称"
                allowClear
                value={keyword}
                onChange={onChange}
                onCompositionStart={onCompositionStart}
                onCompositionEnd={onCompositionEnd}
              />
            </div>
          )}
        </Col>
        <Col span={4} offset={2} className="text-right">
          <Space size="large">
            <Tooltip title="中文 / English">
              <TranslationOutlined className="cursor-pointer" />
            </Tooltip>
            <Tooltip title={isDarkMode ? '日间模式' : '暗夜模式'}>
              <img
                src={isDarkMode ? '/light.png' : '/dark.png'}
                alt="icon"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={handleToggleMode}
              />
            </Tooltip>
            <Tooltip title="GitHub">
              <GithubOutlined className="cursor-pointer" onClick={openGitHubHomePage} />
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
