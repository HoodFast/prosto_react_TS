import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {SelectIt} from "./Select";




const items = [{title: 'Andrey', value: 1},{title: 'Vovan', value: 2},{title: 'Vitek', value: 3}]

export default {
    title: 'Select',
    component: SelectIt
}
const callback = action('click')
const onClick = (value:any)=>{alert(`Push item № ${value}`)}



export const Select = () => {
    const [value, setValue] = useState<string>('none')

    return <SelectIt value={value} onChange={setValue} items={items}/>
}

