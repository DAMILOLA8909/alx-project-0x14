import React from 'react';

interface LayoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'nav' | 'action';
  active?: boolean;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'nav',
  active = false 
}) => {
  const baseClasses = 'px-4 py-2 rounded-md transition-colors duration-200 font-medium';
  
  const variantClasses = {
    nav: active 
      ? 'bg-blue-600 text-white' 
      : 'text-gray-700 hover:bg-gray-200',
    action: 'bg-green-600 text-white hover:bg-green-700'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default LayoutButton;