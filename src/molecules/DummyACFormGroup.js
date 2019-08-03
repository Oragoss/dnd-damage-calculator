import React from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

/**
 * @param value [int]
 * @param onChange [function]
 */
export default function DummyACFormGroup(params) {
    return (
        <div className="form-group row">
            <Label for="dummyAC" class="col-md-2" text="Enemy's Armor AC" />
            <TextInput name="dummyAC" class="col-sm-10" value={params.value} onChange={params.onChange} />
        </div>
    );
}