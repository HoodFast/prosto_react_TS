import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title:'Accordion',
    component: Accordion
}
const callback = action('click')

export const OnMode = ()=> <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const OffMode = ()=> <Accordion titleValue={'Hello'} collapsed={false} onChange={callback}/>

export const ChangeMode = ()=> {
    const [value, setValue] = useState<boolean>(true)
return <Accordion titleValue={'ChangeMode'} collapsed={value} onChange={()=>setValue(!value)}/>
}

