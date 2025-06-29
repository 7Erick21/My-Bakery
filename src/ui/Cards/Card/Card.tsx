import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
