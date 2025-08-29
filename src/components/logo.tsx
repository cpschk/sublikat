import { Cat } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("group flex items-center gap-2", className)}>
      <div className="bg-primary p-1.5 rounded-md transition-transform group-hover:-rotate-12">
        <Cat className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold font-headline text-foreground">
        SubliCat
      </span>
    </Link>
  );
};
