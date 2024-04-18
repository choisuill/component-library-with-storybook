import Head from 'next/head';
import HomeTemplate from '@/templates/home';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <span className="material-symbols-rounded">add</span>
      <HomeTemplate />
    </>
  );
};

export default Home;
