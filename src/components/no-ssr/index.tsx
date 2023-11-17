import React from 'react';
import dynamic from 'next/dynamic';

interface IProps {
  children: React.ReactNode;
}

const NoSsr: React.FC<IProps> = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

const NoSsrWrapper = dynamic(() => Promise.resolve(NoSsr), { ssr: false });

export default NoSsrWrapper;
