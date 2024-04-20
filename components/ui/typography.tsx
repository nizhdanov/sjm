import { cva, type VariantProps } from 'class-variance-authority';

import { avenirNext } from '@/assets/fonts';
import { cn } from '@/lib/utils/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: cn(avenirNext.className, 'text-base')
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
