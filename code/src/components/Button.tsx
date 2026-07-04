import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost' | 'dark' | 'danger';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  small?: boolean;
}

export default function Button({ variant = 'primary', small, className = '', ...rest }: Props) {
  const cls = `btn btn-${variant}${small ? ' btn-sm' : ''} ${className}`.trim();
  return <button className={cls} {...rest} />;
}
