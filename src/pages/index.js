import Head from 'next/head';

import HeaderDescription from '@/components/HeaderDescription';
import BodyDescription from '@/components/BodyDescription';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 lg:p-16 xl:px-36 xl:pb-36 xl:pt-28">
        <HeaderDescription />
        <BodyDescription />
      </main>
    </>
  );
}
