import type { Metadata } from 'next';

import { avenirNext } from '@/assets/fonts';

import { Header } from './_components/Header';
import { Providers } from './providers';

import '@/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'Абитуриенту СурГУ',
  description: 'Карта обучения студента Сургутского государственного универcитета'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='ru'
      className='scrollbar-thin scrollbar-track-[#D9DCDF] scrollbar-thumb-[#A8A9A9] scrollbar-thumb-rounded-full'
    >
      <body className={avenirNext.className}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
