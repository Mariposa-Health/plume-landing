import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

export interface InternalButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  href?: never;
}

export interface InternalLinkProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> {
  href: string;
}

export type InternalButtonComponentProps = InternalButtonProps | InternalLinkProps;

export interface ButtonProps extends BaseButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: never;
}

export interface LinkButtonProps extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

export type ButtonComponentProps = ButtonProps | LinkButtonProps;
