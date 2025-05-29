import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { InternalButtonComponentProps, ButtonVariant, ButtonSize } from '@/types/button';
import { isExternalUrl } from '@/utils/url';

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: InternalButtonComponentProps) => {
  const baseClasses = 'flex justify-center items-center font-fibra font-semibold transition-all duration-300';

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[#6816AF] text-white hover:bg-[#5714a0] rounded-[25px] w-full max-w-[312px] lg:max-w-[378px]',
    secondary: 'text-white border border-[#fff] hover:bg-white hover:text-[#3A0469] rounded-[6px]',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-[20px] py-[10px] text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonClasses = [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  const content = <span className="text-center leading-[24px]">{children}</span>;

  if (href) {
    if (isExternalUrl(href)) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>)}
    >
      {content}
    </button>
  );
};

export default Button;
