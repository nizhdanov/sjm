import { cn } from '@/utils/cn';

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse rounded-md bg-foreground/10', className)} {...props} />;
};

export { Skeleton };
