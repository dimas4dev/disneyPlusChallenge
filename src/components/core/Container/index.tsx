import React from 'react';

interface ResponsiveContainerProps {
    children: React.ReactNode;
    className?: string; // CamelCase para seguir la convención de React
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className }) => {
    return (
        <section className={`container mx-auto px-4 md:px-8 ${className}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {children}
            </div>
        </section>
    );
};

export { ResponsiveContainer };
