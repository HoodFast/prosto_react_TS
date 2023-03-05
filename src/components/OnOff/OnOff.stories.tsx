import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title:'OnOff',
    component: OnOff
}
const callback = action('click')

export const OnMode = ()=> <OnOff on={true} onChange={callback} />
export const OffMode = ()=> <OnOff on={false} onChange={callback} />

export const ChangeMode = ()=> {
    const [value, setValue] = useState<boolean>(true)
return <OnOff on={value} onChange={setValue}/>
}

