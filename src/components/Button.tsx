import React from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  text: string;
  color?: string; // optional custom bg color
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  color = "bg-yellow-500", // default yellow theme
  onClick,
}) => {
  return (
    <button
      onClick={onClick} type="submit"
      className={`${color} flex gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
