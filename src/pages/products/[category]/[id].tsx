// src/pages/products/[category]/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface ProductProps {
  category: string;
  id: string;
}

// ProductPage 컴포넌트를 정의합니다.
const ProductPage: React.FC<ProductProps> = ({ category, id }) => {
  return (
    <div>
      <h1>Product {id} in {category}</h1>
      <p>This is the product content.</p>
    </div>
  );
};

// getStaticPaths 함수는 빌드 시 모든 동적 경로를 정의합니다.
export const getStaticPaths: GetStaticPaths = async () => {
  // 미리 정의된 경로 목록을 반환합니다.
  const paths = [
    { params: { category: 'electronics', id: '1' } },
    { params: { category: 'books', id: '2' } },
  ];
  // fallback을 false로 설정하여 정의되지 않은 경로는 404 페이지로 이동합니다.
  return { paths, fallback: false };
};

// getStaticProps 함수는 빌드 시 각 제품의 데이터를 가져옵니다.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params 객체를 통해 동적 경로의 매개변수를 접근할 수 있습니다.
  return {
    props: {
      category: params?.category, // category 값을 props로 전달합니다.
      id: params?.id, // id 값을 props로 전달합니다.
    },
  };
};

export default ProductPage;