import React from 'react';

const CustomHeader: React.FC = ({ children }) => {
    return (
        <div>
            <p>Custom header</p>
            {children}
        </div>
    );
};

export const addNumber = (a: number, b: number) => {
    return a + b;
}

export default CustomHeader;