import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {OnOff} from "../OnOff/OnOff";


export default {
    title:'UnOnOff',
    component: UncontrolledOnOff
}
const callback = action('click')

export const OnMode = ()=> <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const OffMode = ()=> <UncontrolledOnOff defaultOn={false} onChange={callback} />


export const ChangeMode = ()=> <input defaultValue={'on'}/>


