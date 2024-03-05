import React from 'react';

interface ResponsiveContainerProps {
    children: React.ReactNode;
    classname?: string;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, classname }) => {
    return (
        <section className="container mx-auto p-4 md:p-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${classname}`}>
                {children}
            </div>
        </section>
    );
};

export default ResponsiveContainer;
