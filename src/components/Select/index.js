import React from 'react';
import './styles.css';

const Select = ({ name, label, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(options => {
                    return <option key={options.value} value={options.value}>{options.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;