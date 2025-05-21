import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

interface ButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  href?: never;
}

interface LinkProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> {
  href: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps | LinkProps) => {
  const baseClasses =
    'flex justify-center items-center font-fibra font-semibold transition-colors whitespace-nowrap';

  const variantClasses = {
    primary: 'bg-[#6816AF] text-white hover:bg-[#5714a0] rounded-[25px]',
    secondary: 'bg-[#3A0469] text-white hover:bg-[#2b0350] rounded-md',
    outline: 'border border-[#6816AF] bg-white text-[#6816AF] hover:bg-gray-50 rounded-md',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-5 py-[10px] text-base h-[48px]',
    lg: 'px-6 py-3 text-lg h-12',
  };

  const specificWidths = {
    Login: 'w-[79px]',
    'Get Started': 'w-[130px]',
  };

  const buttonText = typeof children === 'string' ? children : '';
  const widthClass = specificWidths[buttonText as keyof typeof specificWidths] || '';

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = <span className="text-center leading-6">{children}</span>;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>)}
      >
        {content}
      </a>
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
