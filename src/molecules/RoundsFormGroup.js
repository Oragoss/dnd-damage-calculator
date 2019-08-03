import React from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

/**
 * @param value [int]
 * @param onChange [function]
 */
export default function RoundsFormGroup(params) {
    return (
        <div className="form-group row">
            <Label for="rounds" class="col-md-2" text="Number of rounds" />
            <TextInput name="rounds" class="col-sm-10" value={params.value} onChange={params.onChange} />
        </div>
    );
}