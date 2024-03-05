import { useState, ChangeEvent } from 'react';

interface InputChangeHook {
    inputs: {
        email: string;
        password: string;
        search: string;
    };
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInputChange = (): InputChangeHook => {
    const [inputs, setInputs] = useState({ email: '', password: '', search: '' });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    return {
        inputs,
        handleInputChange,
    };
};
