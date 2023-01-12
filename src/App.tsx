import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion1,} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"user"}/>
            <Rating value={4}/>
            <Accordion1 titleValue={"Menu"} collapsed={true}/>
            <Accordion1 titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>

            <OnOff value={true}/>
            <OnOff value={false}/>

        </div>
    )
}

function PageTitle(props: any) {
    return (
        <h1> {props.title} </h1>
    )
}


export default App;
