import React, { ReactNode, ButtonHTMLAttributes } from "react";

// Definicje typów dla props
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "success"
  | "link";
type ButtonSize = "small" | "medium" | "large";
type IconPosition = "left" | "right";

// Rozszerzamy standardowe atrybuty przycisku HTML
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  icon,
  iconPosition = "left",
  ...restProps
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none  transition ease-in-out duration-300";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: `
          bg-muted-gray text-white 
          hover:bg-[#ECC054] hover:text-black
          transition-all duration-300
          hover:scale-[102%]
          hover:shadow-[0_0_15px_rgba(236,192,84,0.8)]
        `,
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    link: "bg-transparent text-blue-600 hover:underline focus:ring-blue-500 p-0",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    small: "text-xs px-2.5 py-1.5",
    medium: "text-sm px-4 py-2",
    large: "text-base px-6 py-3",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const widthStyles = fullWidth ? "w-full" : "";

  const iconSpacing = icon
    ? iconPosition === "left"
      ? "space-x-2"
      : "space-x-reverse space-x-2"
    : "";

  // Łączenie wszystkich stylów
  const buttonStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${disabledStyles} 
    ${widthStyles}
    ${iconSpacing}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
}
