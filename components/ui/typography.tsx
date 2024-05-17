import { cva, type VariantProps } from 'class-variance-authority';

import { avenirNext, openSans } from '@/assets/fonts';
import { cn } from '@/lib/utils/cn';

export const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      base: cn(avenirNext.className, 'text-base font-normal'),
      h1: cn(openSans.className, 'text-lg font-bold '),
      h2: cn(openSans.className, 'text-lg font-semibold '),
      h3: cn(openSans.className, 'text-base font-semibold '),
      p: cn(openSans.className, 'text-sm font-normal '),
      span: 'text-xs font-normal text-ui-gray'
    },
    color: {
      'blue-to-purple':
        'bg-gradient-to-r from-primary to-su-purple to-70% bg-clip-text text-transparent',
      'blue-to-green':
        'bg-gradient-to-r from-primary to-su-green to-70% bg-clip-text text-transparent'
    }
  }
});

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';
export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  tag?: TypographyTag;
  children: React.ReactNode;
} & VariantProps<typeof typographyVariants>;

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  color,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={cn(typographyVariants({ color, variant, className }))} {...props}>
      {children}
    </Component>
  );
};

type SpanProps = React.ComponentProps<'span'> & VariantProps<typeof typographyVariants>;

export const Span = ({ variant = 'span', color, children, className, ...props }: SpanProps) => (
  <span className={cn(typographyVariants({ variant, color, className }))} {...props}>
    {children}
  </span>
);
