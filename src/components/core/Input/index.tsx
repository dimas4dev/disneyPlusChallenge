import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
    id?: string;
    label?: string;
    classname?: string;
}

export const InputComponent: React.FC<InputProps> = (props, { classname }) => {
    return (
        <input
            {...props}
            className={`border border-gray-300 rounded-lg p-2 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300 hover:bg-gray-50 transition-colors duration-150 ${classname}`}
        />
    );
};

