// src/pages/index.tsx
import React from 'react';

// React.FC는 타입스크립트에서 React 함수형 컴포넌트를 정의하는 데 사용됩니다.
const HomePage: React.FC = () => {
  return (
    <div>
      {/* 이곳에 Next.js 페이지의 메인 컨텐츠를 작성합니다 */}
      <h1>Welcome to Next.js!</h1>
    </div>
  );
};

// HomePage 컴포넌트를 기본 익스포트로 설정하여 이 파일을 페이지로 사용합니다.
export default HomePage;