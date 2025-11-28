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
      onClick={onClick}
      className={`${color} text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
