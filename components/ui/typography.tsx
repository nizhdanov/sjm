import { cva, type VariantProps } from 'class-variance-authority';

import { avenirNext, openSans } from '@/assets/fonts';
import { cn } from '@/lib/utils/cn';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      default: cn(avenirNext.className, 'text-base'),
      h1: cn(openSans.className, 'text-xl font-bold '),
      h1_secondary: cn(openSans.className, 'text-xl font-semibold '),
      h2: cn(openSans.className, 'text-lg font-bold '),
      h2_secondary: cn(openSans.className, 'text-lg font-semibold '),
      h3: cn(openSans.className, 'text-base font-bold ')
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';
export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  tag?: TypographyTag;
  children: React.ReactNode;
} & VariantProps<typeof typographyVariants>;

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  );
};
