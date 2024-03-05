import React from 'react';

// Props definition
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    colorButton?: string;
    onclick?: () => void;
}

// Button component
export const Button: React.FC<ButtonProps> = ({ text, colorButton, ...props }) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 ${colorButton} bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        >
            {text}
        </button >
    );
};

