import './globals.css';
import Head from 'next/head';
import Navbar from './Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Caffein :: CCTV Analytics</title> {/* 페이지 제목 */}
        <meta name="Caffe-insight" content="AR with fast-api & next.js" />{' '}
        {/* 설명 추가 */}
      </Head>
      <body className="bg-black">
        {/* 메인 콘텐츠 */}
        <main className=" z-20 bg-slate-400 flex max-w-5xl ">
          <Navbar />
          <div className="flex justify-end w-full max-w-4xl mx-auto px-4 z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
