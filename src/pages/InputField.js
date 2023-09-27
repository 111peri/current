import React from 'react';
import styles from './InputField.module.css';

function InputField({ name, value, onChange, placeholder, isError }) {
    const inputClassName = isError ? styles.error : '';

    return (
        <div className={styles.inputField}>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClassName}
            />
        </div>
    );
}

export default InputField;
