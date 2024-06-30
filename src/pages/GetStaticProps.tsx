import { GetStaticProps } from "next";

export interface Data {
  message: string;
}

export interface HomePageProps {
  data: string;
}

export const getStaticProps : GetStaticProps = async() => {
  const res = await fetch('http://localhost:3010/book');
  const data = await res.text();

  return {
    props: {
      data : data
    },
  };
}

export const PropsPage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div>
      <h1>Data</h1>
      <pre>{data}</pre>
    </div>
  );
};
