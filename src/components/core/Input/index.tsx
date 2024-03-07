import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

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
export const InputComponent: React.FC<InputProps> = ({ type, classname, ...props }) => {
    const [inputType, setInputType] = useState(type);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className={`relative ${classname}`}>
            <input
                {...props}
                type={inputType}
                className="border border-gray-300 rounded-lg p-2 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300 hover:bg-gray-50 transition-colors duration-150 w-full"
            />
            {type === 'password' && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {isPasswordVisible ? (
                        <EyeSlashIcon className="h-5 w-5 text-gray-700 cursor-pointer" onClick={togglePasswordVisibility} />
                    ) : (
                        <EyeIcon className="h-5 w-5 text-gray-700 cursor-pointer" onClick={togglePasswordVisibility} />
                    )}
                </div>
            )}
        </div>
    );
};
