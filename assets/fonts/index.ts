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
      path: './OpenSans/OpenSans-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './OpenSans/OpenSans-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './OpenSans/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './OpenSans/OpenSans-Light.woff2',
      weight: '300',
      style: 'normal'
    }
  ]
});
