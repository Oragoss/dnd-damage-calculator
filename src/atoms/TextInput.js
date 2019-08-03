import React from 'react';

/**
 * @param name [string]
 * @param class [string]
 * @param value [string]
 * @param onChange [function]
 */
export default function TextInput(params) {
    return (
        <div className={params.class}>
            <input type="text" className="form-control" id={params.name} name={params.name} value={params.value} onChange={params.onChange} />
        </div>
    );
}