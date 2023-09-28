import React from 'react';

function InputField({ name, value, onChange, placeholder, isError }) {
    const inputClassName = isError ? 'error' : '';

    return (
        <div>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClassName}
                style={{ borderColor: isError ? 'red' : '' }}
            />
        </div>
    );
}

export default InputField;
