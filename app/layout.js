// app/layout.js
import './globals.css';
import Head from 'next/head';
import LayoutWrapper from '../components/LayoutWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Caffein :: CCTV Analytics</title>
        <meta name="Caffe-insight" content="AR with fast-api & next.js" />
      </Head>
      <body className="bg-black">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
