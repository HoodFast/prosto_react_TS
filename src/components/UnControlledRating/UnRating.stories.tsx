import React from 'react';

import {action} from "@storybook/addon-actions";
import {UnControlledRating} from "./UnControlledRating";


export default {
    title: 'UnRating',
    component: UnControlledRating
}
const callback = action('click')

export const Rating0 = () => <UnControlledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnControlledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControlledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControlledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControlledRating defaultValue={5} onChange={callback}/>


export const ChangeMode = () => <UnControlledRating onChange={callback}/>


