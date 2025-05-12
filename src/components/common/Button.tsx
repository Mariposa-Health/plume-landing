'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = 'flex justify-center items-center rounded-md font-fibra font-semibold transition-colors whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-[#3A0469] text-white hover:bg-[#2b0350]',
    outline: 'border border-[#6816AF] bg-white text-[#6816AF] hover:bg-gray-50'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-5 py-[10px] text-base h-[48px]',
    lg: 'px-6 py-3 text-lg h-12'
  };
  
  const specificWidths = {
    'Login': 'w-[79px]',
    'Get Started': 'w-[130px]'
  };
  
  const buttonText = typeof children === 'string' ? children : '';
  const widthClass = specificWidths[buttonText as keyof typeof specificWidths] || '';
  
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button className={buttonClasses} {...props}>
      <span className="text-center leading-6">
        {children}
      </span>
    </button>
  );
};

export default Button;