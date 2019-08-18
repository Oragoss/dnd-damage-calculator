import React from 'react';

/**
 * @param options [array]
 * @param class [string]
 * @param text [string]
 */
export default function Select(params) {

    // <option value="volvo">Volvo</option>
    //         <option value="saab">Saab</option>
    //         <option value="mercedes">Mercedes</option>
    //         <option value="audi">Audi</option>

    return (
        <select>
            {params.options}
        </select>
    );
}