import React from 'react';
import {Button, Checkbox, Form, FormGroup, RadioButton, RadioButtonGroup, TextInput} from "@carbon/react";

function Booking() {
    return (
        <div>
            <h1>Booking</h1>
            <div>
         <FormGroup style={{
                maxWidth: '400px'
            }} legendText="FormGroup Legend">
                    <TextInput id="one" labelText="First Name" />
                    <TextInput id="two" labelText="Last Name" />
                    <RadioButtonGroup legendText="Radio button heading" name="radio-button-group" defaultSelected="radio-1">
                        <RadioButton labelText="Option 1" value="radio-1" id="radio-1" />
                        <RadioButton labelText="Option 2" value="radio-2" id="radio-2" />
                        <RadioButton labelText="Option 3" value="radio-3" id="radio-3" />
                    </RadioButtonGroup>
                    <Button>Submit</Button>

            </FormGroup>
            </div>
        </div>
    );
}

export default Booking;