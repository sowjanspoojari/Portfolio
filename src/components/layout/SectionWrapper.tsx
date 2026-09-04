import React from 'react';

interface SectionWrapperProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = '', children }) => {
    return (
        <section id={id} className={`py-20 md:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
