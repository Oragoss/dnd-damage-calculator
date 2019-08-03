import React from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

/**
 * @param value [int]
 * @param onChange [function]
 */
export default function BonusHitFormGroup(params) {
    return (
        <div className="form-group row">
            <Label for="bonusHit" class="col-md-2" text="Bonus to hit" />
            <TextInput name="bonusHit" class="col-sm-10" value={params.value} onChange={params.onChange} />
        </div>
    );
}