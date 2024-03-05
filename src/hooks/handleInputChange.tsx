import { useState, useCallback } from 'react';

export function useInputChange(initialValue: string = '') {
    const [value, setValue] = useState(initialValue);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return {
        value,
        onChange: handleInputChange,
    };
}
