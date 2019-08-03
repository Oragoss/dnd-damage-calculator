import React from 'react';

/**
 * @param for [string]
 * @param class [string]
 * @param text [string]
 */
export default function Label(params) {
    return <label htmlFor={params.for} className={`${params.class} col-form-label`}>{params.text}</label>;
    // example: <label htmlFor="rounds" className="col-md-2 col-form-label">Number of rounds</label>
}