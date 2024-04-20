import localFont from 'next/font/local';

export const avenirNext = localFont({
  src: [
    {
      path: './AvenirNext/AvenirNextCyr-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './AvenirNext/AvenirNextCyr-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
});

export const openSans = localFont({
  src: [
    {
      path: './OpenSans/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
});
