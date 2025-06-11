import { Music } from 'lucide-react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const logoVariants = cva('text-center', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

const containerVariants = cva('flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2d006b] via-[#6d28d9] to-[#a78bfa] shadow-2xl transition-shadow group-hover:shadow-purple-700/50', {
  variants: {
    size: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

const iconVariants = cva('text-white', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

const dotVariants = cva('absolute animate-pulse rounded-full bg-pink-500 shadow-lg', {
  variants: {
    size: {
      sm: 'h-2 w-2 -top-0.5 -right-0.5',
      md: 'h-3 w-3 -top-0.5 -right-0.5',
      lg: 'h-4 w-4 -top-1 -right-1',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

const textVariants = cva('bg-gradient-to-r from-[#2d006b] via-[#6d28d9] to-[#a78bfa] bg-clip-text font-bold text-transparent drop-shadow', {
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-2xl',
      lg: 'text-3xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, size = 'lg', showText = true }: LogoProps) {
  return (
    <div className={cn(logoVariants({ size }), className)}>
      <Link href='/' className='group inline-flex items-center space-x-3'>
        <div className='relative'>
          <div className={containerVariants({ size })}>
            <Music className={iconVariants({ size })} />
          </div>
          <div className={dotVariants({ size })} />
        </div>
        {showText && (
          <div>
            <span className={textVariants({ size })}>MyPly</span>
          </div>
        )}
      </Link>
    </div>
  );
}
