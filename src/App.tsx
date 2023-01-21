import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"user"}/>
            <UnControlledRating />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <Rating value={4}/>

            <OnOff />
            <OnOff />


        </div>
    )
}

function PageTitle(props: any) {
    return (
        <h1> {props.title} </h1>
    )
}


export default App;
