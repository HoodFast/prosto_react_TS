import React, {useState} from 'react';
import {Rating, RatingPropsType, RatingValueType} from "./Rating";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating',
    component: Rating
}

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

const callbackProps = {
    callback: action('1')
}

export const RatingV2_0 = Template.bind({})

RatingV2_0.args = {
    ...callbackProps,
    value: 1,

}

// export const EmptyRating = ()=> <Rating value={0} onClick={x=>x} />
// export const Rating1 = ()=> <Rating value={1} onClick={x=>x} />
// export const Rating2 = ()=> <Rating value={2} onClick={x=>x} />
// export const Rating3 = ()=> <Rating value={3} onClick={x=>x} />
// export const Rating4 = ()=> <Rating value={4} onClick={x=>x} />
// export const Rating5 = ()=> <Rating value={5} onClick={x=>x} />
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3);

    return <Rating value={rating} onClick={setRating}/>
}

