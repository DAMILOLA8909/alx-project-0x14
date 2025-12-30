import { ButtonProps } from "@/interfaces";
import { ReactNode } from "react";

const Button: React.FC<ButtonProps> = ({ title, action, disabled = false, className = "", icon }) => {
  return (
    <button 
      onClick={action} 
      disabled={disabled}
      className={`
        px-6 py-3 rounded-xl font-medium transition-all duration-300
        flex items-center justify-center gap-2
        ${disabled 
          ? 'opacity-50 cursor-not-allowed bg-gray-700' 
          : 'hover:scale-105 active:scale-95'
        }
        ${className}
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {title}
    </button>
  )
}

export default Button;