import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'left',
  children 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 max-w-2xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl font-bold mb-3 text-gray-900">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
      {children}
    </div>
  );
}