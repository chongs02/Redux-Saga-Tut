import React from 'react';

import './style.css';

const Button = ({ children, loading, ...props }) => {
    console.log(props);
    return (
        <button className="button" disabled={loading} {...props}>
            {loading ? 'Loading...' : children}
        </button>
    );
};

Button.defaultProps = {
    loading: false,
};

export default Button;
