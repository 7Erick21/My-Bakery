import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface CardContentProps extends HtmlHTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const CardContent: FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
