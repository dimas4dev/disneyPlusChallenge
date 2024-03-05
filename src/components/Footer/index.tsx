import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white py-4 flex justify-center items-center border-t">
            <span className="text-center text-gray-700 text-sm">
                © Disney. Todos los derechos reservados.
            </span>
        </footer>
    );
};
