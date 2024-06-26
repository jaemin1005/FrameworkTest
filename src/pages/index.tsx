// src/pages/index.tsx
import React from 'react';
import { text } from '../styles/styles.css';
import { GetStaticProps } from 'next';

interface HomePageProps {
  message: string;
}

// React.FC는 타입스크립트에서 React 함수형 컴포넌트를 정의하는 데 사용됩니다.
const HomePage: React.FC<HomePageProps> = ({message}) => {
  return (
    <div>
      <h1 className={text}>{message}</h1>
    </div>
  );
};

export const getStaticProps : GetStaticProps = async () => {
  const res = await fetch('http://localhost:3010/book');
  const data = await res.text();  // if the response is a plain text, use res.text()

  return {
    props: {
      message: data,
    },
  };
}

// HomePage 컴포넌트를 기본 익스포트로 설정하여 이 파일을 페이지로 사용합니다.
export default HomePage;