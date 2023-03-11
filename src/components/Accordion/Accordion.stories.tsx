import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


const items = [{title: 'Andrey', value: 1},{title: 'Vovan', value: 2},{title: 'Vitek', value: 3}]

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('click')
const onClick = (value:any)=>{alert(`Push item № ${value}`)}

export const OnMode = () => <Accordion items={items} titleValue={'Menu'} collapsed={true} onChange={callback} onClick={onClick}/>
export const OffMode = () => <Accordion items={items} titleValue={'Hello'} collapsed={false} onChange={callback} onClick={onClick}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion items={items} titleValue={'ChangeMode'} collapsed={value} onChange={() => setValue(!value)} onClick={onClick}/>
}

